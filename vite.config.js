import { resolve } from 'path'
// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    sourcemap: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'nested/about.html'),
        contact: resolve(__dirname, 'nested/contact.html')
      }
    }
  }
})
