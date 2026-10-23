import type { IncomingMessage, ServerResponse } from 'http'

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

function sendResponse(
  res: ServerResponse & { status?: (code: number) => any; json?: (data: any) => void },
  statusCode: number,
  data: Record<string, any>
) {
  if (typeof res.status === 'function' && typeof res.json === 'function') {
    res.status(statusCode).json(data)
  } else {
    res.statusCode = statusCode
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(data))
  }
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
      Messaggio ricevuto dal form contatti di lamelinatorino.it
    </div>
  </div>
</body>
</html>`
}

export default async function handler(
  req: IncomingMessage & { body?: any; method?: string },
  res: ServerResponse & { status?: (code: number) => any; json?: (data: any) => void }
) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    res.statusCode = 200
    res.end()
    return
  }

  if (req.method !== 'POST') {
    sendResponse(res, 405, { error: 'Metodo non consentito. Utilizzare POST.' })
    return
  }

  let data: ContactRequestBody = {}
  try {
    if (typeof req.body === 'object' && req.body !== null) {
      data = req.body
    } else {
      const raw = await new Promise<string>((resolve, reject) => {
        let acc = ''
        req.on('data', chunk => { acc += chunk })
        req.on('end', () => resolve(acc))
        req.on('error', reject)
      })
      data = raw ? JSON.parse(raw) : {}
    }
  } catch {
    sendResponse(res, 400, { error: 'Payload JSON non valido.' })
    return
  }

  const { name, email, phone, checkIn, checkOut, guests, apartment, message } = data

  if (!name || !email) {
    sendResponse(res, 422, { error: 'Nome ed email sono campi obbligatori.' })
    return
  }

  const recipientEmail = process.env.HOST_EMAIL || 'info.lamelina@gmail.com'
  const resendApiKey = process.env.RESEND_API_KEY

  const htmlContent = buildHtmlTemplate(data)
  const subject = `Nuova Richiesta da ${name} - La Melina (${apartment || 'Generale'})`

  // 1. Resend (Primary: lightning fast ~150ms)
  if (resendApiKey) {
    try {
      const resendRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
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

      if (resendRes.ok) {
        sendResponse(res, 200, {
          success: true,
          message: 'Richiesta inviata con successo via Resend.',
        })
        return
      }

      const resendError = await resendRes.text()
      console.error('Errore Resend API:', resendError)
    } catch (err) {
      console.error('Eccezione chiamata Resend:', err)
    }
  }

  // 2. Fallback FormSubmit (runs seamlessly if RESEND_API_KEY is not set)
  try {
    const fallbackRes = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        phone: phone || 'Non specificato',
        checkIn: checkIn || 'Da definire',
        checkOut: checkOut || 'Da definire',
        guests: guests || '2',
        apartment: apartment || 'Da valutare',
        message: message || 'Richiesta di disponibilità e preventivo diretto.',
        _subject: subject,
        _template: 'table',
        _captcha: 'false',
      }),
    })

    if (fallbackRes.ok) {
      sendResponse(res, 200, {
        success: true,
        fallback: true,
        message: 'Richiesta inviata con successo (fallback FormSubmit).',
      })
      return
    }
  } catch (fallbackErr) {
    console.error('Eccezione Fallback FormSubmit:', fallbackErr)
  }

  sendResponse(res, 500, {
    error: 'Impossibile inviare il messaggio in questo momento. Ti invitiamo a scriverci direttamente via WhatsApp o email.',
  })
}
