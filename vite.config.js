import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  base: '/votsecure-v3/',
  build: {
    outDir: 'docs',
  },
})
