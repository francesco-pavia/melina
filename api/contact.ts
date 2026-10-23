import type { VercelRequest, VercelResponse } from '@vercel/node'

interface ContactRequestBody {
  name?: string
  email?: string
  phone?: string
  checkIn?: string
  checkOut?: string
  guests?: string
  apartment?: string
  message?: string
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

function buildHtmlTemplate(data: ContactRequestBody): string {
  const name = escapeHtml(data.name || 'Ospite')
  const email = escapeHtml(data.email || 'Non specificata')
  const phone = escapeHtml(data.phone || 'Non specificato')
  const apartment = escapeHtml(data.apartment || 'Non specificato')
  const checkIn = escapeHtml(data.checkIn || 'Da definire')
  const checkOut = escapeHtml(data.checkOut || 'Da definire')
  const guests = escapeHtml(data.guests || '2')
  const rawMessage = data.message || 'Nessun messaggio aggiuntivo specificato.'
  const message = escapeHtml(rawMessage).replace(/\n/g, '<br/>')

  return `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="utf-8">
  <title>Nuova Richiesta La Melina</title>
  <style>
    body {
      margin: 0;
      padding: 24px;
      background-color: #f5f5f4;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      color: #292524;
    }
    .wrapper {
      max-width: 600px;
      margin: 0 auto;
      background: #ffffff;
      border-radius: 16px;
      overflow: hidden;
      border: 1px solid #e7e5e4;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
    }
    .header {
      background: linear-gradient(135deg, #1c1917 0%, #292524 100%);
      padding: 32px 28px;
      text-align: center;
      color: #ffffff;
    }
    .header .badge {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 9999px;
      background: rgba(217, 119, 6, 0.2);
      border: 1px solid rgba(217, 119, 6, 0.4);
      color: #f59e0b;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 1px;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .header h1 {
      margin: 0;
      font-size: 22px;
      font-family: Georgia, serif;
      font-weight: bold;
    }
    .content {
      padding: 28px;
    }
    .field-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 24px;
    }
    .field-table td {
      padding: 12px 14px;
      border-bottom: 1px solid #f5f5f4;
      font-size: 14px;
    }
    .field-table .label {
      width: 38%;
      color: #78716c;
      font-weight: 600;
    }
    .field-table .val {
      color: #1c1917;
      font-weight: 500;
    }
    .message-card {
      background-color: #fafaf9;
      border: 1px solid #e7e5e4;
      border-radius: 12px;
      padding: 18px;
      margin-top: 16px;
    }
    .message-card-title {
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: #78716c;
      margin-bottom: 8px;
    }
    .message-card-body {
      font-size: 14px;
      line-height: 1.6;
      color: #292524;
    }
    .actions {
      margin-top: 28px;
      text-align: center;
      padding-top: 20px;
      border-top: 1px solid #f5f5f4;
    }
    .btn {
      display: inline-block;
      padding: 12px 24px;
      background-color: #d97706;
      color: #ffffff !important;
      text-decoration: none;
      font-weight: 600;
      font-size: 13px;
      border-radius: 10px;
      margin: 4px;
    }
    .footer {
      background: #fafaf9;
      padding: 16px 24px;
      text-align: center;
      font-size: 12px;
      color: #a8a29e;
      border-top: 1px solid #f5f5f4;
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <div class="badge">Sito Web La Melina</div>
      <h1>Nuova Richiesta di Informazioni</h1>
    </div>
    <div class="content">
      <table class="field-table">
        <tr>
          <td class="label">Ospite</td>
          <td class="val"><strong>${name}</strong></td>
        </tr>
        <tr>
          <td class="label">Email</td>
          <td class="val"><a href="mailto:${email}" style="color: #d97706; text-decoration: none;">${email}</a></td>
        </tr>
        <tr>
          <td class="label">Telefono</td>
          <td class="val">${phone}</td>
        </tr>
        <tr>
          <td class="label">Alloggio richiesto</td>
          <td class="val"><strong>${apartment}</strong></td>
        </tr>
        <tr>
          <td class="label">Date richieste</td>
          <td class="val">Check-in: <strong>${checkIn}</strong> &rarr; Check-out: <strong>${checkOut}</strong></td>
        </tr>
        <tr>
          <td class="label">Numero ospiti</td>
          <td class="val">${guests}</td>
        </tr>
      </table>

      <div class="message-card">
        <div class="message-card-title">Messaggio / Note dell'ospite:</div>
        <div class="message-card-body">${message}</div>
      </div>

      <div class="actions">
        <a href="mailto:${email}?subject=Re:%20Richiesta%20La%20Melina" class="btn">Rispondi a ${name}</a>
      </div>
    </div>
    <div class="footer">
      Messaggio inviato dal form contatti La Melina
    </div>
  </div>
</body>
</html>`
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Metodo non consentito. Utilizzare POST.' })
  }

  let data: ContactRequestBody = req.body
  if (typeof data === 'string') {
    try {
      data = JSON.parse(data)
    } catch {
      return res.status(400).json({ error: 'Payload JSON non valido.' })
    }
  }

  const { name, email, phone, checkIn, checkOut, guests, apartment, message } = data || {}

  if (!name || !email) {
    return res.status(422).json({ error: 'Nome ed email sono campi obbligatori.' })
  }

  const recipientEmail = process.env.HOST_EMAIL || 'info.lamelina@gmail.com'
  const resendApiKey = process.env.RESEND_API_KEY

  if (!resendApiKey) {
    console.error('RESEND_API_KEY non trovata su Vercel.')
    return res.status(500).json({
      error: 'Variabile RESEND_API_KEY non trovata su Vercel. Ricordati di fare il Redeploy su Vercel dopo averla aggiunta.',
    })
  }

  const htmlContent = buildHtmlTemplate(data)
  const subject = `Nuova Richiesta da ${name} - La Melina (${apartment || 'Generale'})`

  try {
    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey.trim()}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM_EMAIL || 'La Melina <onboarding@resend.dev>',
        to: [recipientEmail],
        reply_to: email,
        subject,
        html: htmlContent,
      }),
    })

    const resendJson: any = await resendRes.json().catch(() => ({}))

    if (!resendRes.ok) {
      console.error('Errore Resend API:', resendRes.status, resendJson)
      return res.status(resendRes.status).json({
        error: resendJson?.message || 'Errore durante l’invio con Resend.',
        details: resendJson,
      })
    }

    return res.status(200).json({
      success: true,
      id: resendJson?.id,
      message: 'Richiesta inviata con successo!',
    })
  } catch (err: any) {
    console.error('Eccezione chiamata Resend:', err)
    return res.status(500).json({
      error: err?.message || 'Errore di connessione con il servizio email.',
    })
  }
}
