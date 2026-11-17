import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, type Plugin } from 'vite'

function devApiPlugin(): Plugin {
  return {
    name: 'dev-api-contact-handler',
    configureServer(server) {
      const handleDevRequest = (req: import('http').IncomingMessage, res: import('http').ServerResponse) => {
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
            if (body) JSON.parse(body)
            // Keep submitted contact details and travel plans out of development logs.

            res.statusCode = 200
            res.setHeader('Content-Type', 'application/json')
            res.end(
              JSON.stringify({
                success: true,
                message: 'Local development mode: this request was simulated and no email was sent.',
                dev: true,
              })
            )
          } catch {
            res.statusCode = 400
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ error: 'Invalid JSON payload' }))
          }
        })
      }
      server.middlewares.use('/api/contact', handleDevRequest)
      server.middlewares.use('/api/feedback', handleDevRequest)
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
