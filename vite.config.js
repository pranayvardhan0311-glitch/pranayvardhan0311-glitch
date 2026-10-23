import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Sandbox-only: relax Vite's host check so the preview proxy can reach the dev server.
// Gated on the platform flag; behavior is unchanged with the flag unset.
const isPreview = process.env.BASE44_PREVIEW_MODE === '1'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
    ...(isPreview ? { allowedHosts: true } : {}),
  },
})
