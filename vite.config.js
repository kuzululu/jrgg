import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

dotenv.config()

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    host: '0.0.0.0', // <-- Add this line to allow LAN access
    port: Number(process.env.VITE_PORT),
    base: "/reactPortfolio"
  }
})
