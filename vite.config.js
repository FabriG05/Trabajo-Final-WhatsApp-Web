import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Trabajo-Final-WhatsApp-Web/',
  build: {
    outDir: 'docs',
  },
})
