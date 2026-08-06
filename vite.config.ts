import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// User site (username.github.io) uses base '/'.
// For project pages (username.github.io/repo), set base to '/repo/'.
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
})
