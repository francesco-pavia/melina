import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, type Plugin } from 'vite'

function devApiPlugin(): Plugin {
  return {
    name: 'dev-api-contact-handler',
    configureServer(server) {
      server.middlewares.use('/api/contact', (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ error: 'Method not allowed' }))
          return
        }

        let body = ''
        req.on('data', (chunk) => {
          body += chunk
        })
        req.on('end', () => {
          try {
            const data = body ? JSON.parse(body) : {}
            console.log('\n📬 [DEV Server] Richiesta form ricevuta:')
            console.log(`   Ospite: ${data.name} (${data.email})`)
            console.log(`   Appartamento: ${data.apartment}`)
            console.log(`   Date: ${data.checkIn || '-'} -> ${data.checkOut || '-'}`)
            console.log(`   Ospiti: ${data.guests}`)
            console.log(`   Messaggio: ${data.message || '(nessuno)'}\n`)

            res.statusCode = 200
            res.setHeader('Content-Type', 'application/json')
            res.end(
              JSON.stringify({
                success: true,
                dev: true,
                message: 'Richiesta ricevuta in locale dal dev server Vite.',
              })
            )
          } catch {
            res.statusCode = 400
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ error: 'Invalid JSON payload' }))
          }
        })
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    devApiPlugin(),
  ],
})
