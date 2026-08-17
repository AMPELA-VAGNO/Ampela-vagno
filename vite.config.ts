import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import contactHandler from './api/contact.ts'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Les variables SMTP restent côté serveur : aucune n'est exposée au navigateur.
  Object.assign(process.env, loadEnv(mode, process.cwd(), ''))

  return {
    plugins: [
      react(),
      {
        name: 'contact-smtp-dev',
        configureServer(server) {
          server.middlewares.use('/api/contact', (request, response) => {
            void contactHandler(request, response)
          })
        },
      },
    ],
  }
})
