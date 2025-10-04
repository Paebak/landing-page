import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Root apex domain => base MUST be '/'
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    outDir: 'dist',           // default; keep it explicit
    sourcemap: false
  }
})
