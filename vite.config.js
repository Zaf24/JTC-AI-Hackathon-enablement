import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'

const __dirname = dirname(fileURLToPath(import.meta.url))

// Relative base so the app works on any GitHub Pages URL (project subpath or root).
// Assets load correctly whether the site is at /repo-name/ or at / (user/org site).
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Copy index.html to 404.html so GitHub Pages serves SPA on client routes / refresh
    {
      name: 'copy-404',
      closeBundle() {
        const outDir = resolve(__dirname, 'dist')
        const indexPath = resolve(outDir, 'index.html')
        const notFoundPath = resolve(outDir, '404.html')
        if (fs.existsSync(indexPath)) {
          fs.copyFileSync(indexPath, notFoundPath)
        }
      },
    },
  ],
  base: './',
})
