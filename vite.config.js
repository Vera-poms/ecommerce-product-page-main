import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      external: [
        '/path/to/icon-menu.svg',
        '/path/to/image-product-1.jpg',
        '/path/to/icon-plus.svg',
        // '/path/to/icon-menu.svg',
        // '/path/to/icon-menu.svg',
      ]
    },
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
})
