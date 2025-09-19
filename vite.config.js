import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

server.allowedHosts { 'devserver-main--angel-touch.netlify.app' }
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
