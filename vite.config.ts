import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  // Emit relative asset URLs so the app works on both root and subpath hosts.
  base: './',
  plugins: [react()],
  server: {
    proxy: {
      '/api/avatars': {
        target: 'https://reqres.in',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/avatars/, '/img/faces'),
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
