import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Site is served from the custom domain hona.fitness at the root, so base is '/'.
// If you ever revert to the github.io subpath, change back to '/Hona/'.
export default defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    port: 5173,
    open: true
  }
})
