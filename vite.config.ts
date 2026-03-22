import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
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
