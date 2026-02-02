import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/resume/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),       // /resume/
        full: resolve(__dirname, 'full/index.html'),       // /resume/full
        backend: resolve(__dirname, 'backend/index.html'), // /resume/backend
        frontend: resolve(__dirname, 'fronted/index.html') // /resume/frontend
      }
    }
  }
})
