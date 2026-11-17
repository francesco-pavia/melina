import type { VercelRequest, VercelResponse } from '@vercel/node'

const escapeHtml = (value: string) => value.replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]!)
const requests = new Map<string, { count: number; resetAt: number }>()

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ code: 'method_not_allowed' })
  const origin = req.headers.origin
  const host = req.headers.host
  if (origin && host) {
    try { if (new URL(origin).host.toLowerCase() !== host.toLowerCase()) return res.status(403).json({ code: 'invalid_origin' }) }
    catch { return res.status(403).json({ code: 'invalid_origin' }) }
  }
  const forwarded = req.headers['x-forwarded-for']
  const ip = (Array.isArray(forwarded) ? forwarded[0] : forwarded)?.split(',')[0]?.trim() || req.socket.remoteAddress || 'unknown'
  const now = Date.now()
  const entry = requests.get(ip)
  if (entry && entry.resetAt > now && entry.count >= 5) return res.status(429).json({ code: 'rate_limited' })
  requests.set(ip, entry && entry.resetAt > now ? { ...entry, count: entry.count + 1 } : { count: 1, resetAt: now + 15 * 60 * 1000 })

  let data = req.body
  if (typeof data === 'string') { try { data = JSON.parse(data) } catch { return res.status(400).json({ code: 'invalid_json' }) } }
  if (!data || typeof data !== 'object' || Array.isArray(data)) return res.status(400).json({ code: 'invalid_json' })
  const { apartment, rating, liked, improve, name, email } = data as Record<string, unknown>
  if ([apartment, liked, improve, name, email].some((v) => v !== undefined && typeof v !== 'string')) return res.status(422).json({ code: 'invalid_fields' })
  const numericRating = rating === '' || rating === undefined ? null : Number(rating)
  if (!['La Melina su Via Po', 'La Melina sotto la Mole'].includes(String(apartment)) || (numericRating !== null && (!Number.isFinite(numericRating) || numericRating < 0.5 || numericRating > 5 || numericRating * 2 % 1 !== 0))) return res.status(422).json({ code: 'invalid_fields' })
  const fields = { apartment: String(apartment), rating: String(rating || 'Not provided'), liked: String(liked || '').trim(), improve: String(improve || '').trim(), name: String(name || '').trim(), email: String(email || '').trim() }
  if (fields.liked.length > 2000 || fields.improve.length > 2000 || fields.name.length > 100 || fields.email.length > 254 || (fields.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))) return res.status(422).json({ code: 'invalid_fields' })
  if (!fields.liked && !fields.improve && numericRating === null) return res.status(422).json({ code: 'empty_feedback' })

  const key = process.env.RESEND_API_KEY
  if (!key) return res.status(503).json({ code: 'email_unavailable' })
  const row = (label: string, value: string) => `<p><b>${label}:</b> ${escapeHtml(value || '—')}</p>`
  const html = [row('Apartment', fields.apartment), row('Rating', fields.rating), row('What went well', fields.liked), row('Could improve', fields.improve), row('Name', fields.name), row('Email', fields.email)].join('')
  try {
    const response = await fetch('https://api.resend.com/emails', { method: 'POST', headers: { Authorization: `Bearer ${key.trim()}`, 'Content-Type': 'application/json' }, body: JSON.stringify({ from: process.env.RESEND_FROM_EMAIL || 'La Melina <onboarding@resend.dev>', to: [process.env.HOST_EMAIL || 'francesco.pavia7@icloud.com'], ...(fields.email ? { reply_to: fields.email } : {}), subject: `Private guest feedback · ${fields.apartment}`, html }) })
    if (!response.ok) return res.status(502).json({ code: 'email_failed' })
    return res.status(200).json({ success: true })
  } catch { return res.status(502).json({ code: 'email_failed' }) }
}
