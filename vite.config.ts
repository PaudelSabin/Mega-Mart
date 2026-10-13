import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Vite configuration (unchanged from the Vite template).
// The React plugin turns JSX/TSX into plain JavaScript and gives fast refresh
// while you edit. Images (.webp, .png, .svg) and fonts (.woff2) are handled by
// Vite out of the box, so nothing else is needed here.
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
