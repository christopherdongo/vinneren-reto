import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  test: {   // ❌ ERROR porque viene de "vite"
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
})
