import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import wasm from 'vite-plugin-wasm'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [svelte(), wasm()],
  plugins: [svelte(), wasm()],
  resolve: {
    alias: {
      // '@lib': path.resolve(__dirname, 'src/lib'),
      '@root': path.resolve(__dirname, '../../'),
      '@wasm': path.resolve(__dirname, '../../pkg'),
    },
  },
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['..', '../../', '../../pkg']
      // Alternatively, specify a specific directory
      // allow: ['/absolute/path/to/your/directory', './relative/path']
    }
  }
})
