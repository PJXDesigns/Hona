import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves the site at https://<user>.github.io/<repo>/ so Vite needs
// to emit asset URLs with that prefix. For a user/custom-domain site set base: '/'.
export default defineConfig({
  base: '/Hona/',
  plugins: [react()],
  server: {
    port: 5173,
    open: true
  }
})
