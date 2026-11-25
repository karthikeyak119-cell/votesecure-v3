import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/votsecure-v3/',
  plugins: [react()],
})
