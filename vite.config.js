import { resolve } from 'path'
// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vite'

/**
 * Some code from the vite documentation for Multi-Page Apps
 * Debugging is very difficult if we navigate to the about or contact pages
 * The pages will nog be shown in the devtools
 * For each page we tell the build tool to resolve its content
 * We also want to source code to be readable so we want to create a Sourcemap
 * It is a mapping between the generated/transpiled/minified JavaScript file
 * and one or more original source files.
 * This helps debugging. If there is an error, a source map can tell you
 * the original source file location.
 * A sourcemap must be generated from the original script before use.
 */

export default defineConfig({
  base: '/recipe-book/',
  build: {
    sourcemap: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'pages/about.html'),
        contact: resolve(__dirname, 'pages/contact.html')
      }
    }
  }
})
