import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { copyFileSync, existsSync, mkdirSync, readdirSync } from 'fs'

function copyDirSync(src, dest) {
  mkdirSync(dest, { recursive: true })
  for (const entry of readdirSync(src, { withFileTypes: true })) {
    const s = resolve(src, entry.name)
    const d = resolve(dest, entry.name)
    if (entry.isDirectory()) copyDirSync(s, d)
    else copyFileSync(s, d)
  }
}

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-assets',
      buildStart() {
        if (existsSync('manifest.json')) {
          if (!existsSync('public')) {
            mkdirSync('public', { recursive: true })
          }
          copyFileSync('manifest.json', 'public/manifest.json')
        }
      },
      closeBundle() {
        const assetsDir = resolve(__dirname, 'assets')
        const outAssets = resolve(__dirname, 'dist', 'assets')
        if (existsSync(assetsDir) && existsSync(resolve(__dirname, 'dist'))) {
          copyDirSync(assetsDir, outAssets)
        }
      }
    },
    // Serve root assets/ at /assets in dev so hero images and card images load
    {
      name: 'serve-assets',
      configureServer(server) {
        const fs = require('fs')
        const mime = { '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.gif': 'image/gif', '.svg': 'image/svg+xml', '.ico': 'image/x-icon' }
        server.middlewares.use('/assets', (req, res, next) => {
          const p = resolve(__dirname, 'assets', (req.url || '').replace(/^\//, '').split('?')[0])
          if (fs.existsSync(p) && fs.statSync(p).isFile()) {
            const ext = require('path').extname(p)
            res.setHeader('Content-Type', mime[ext] || 'application/octet-stream')
            fs.createReadStream(p).pipe(res)
          } else next()
        })
      }
    },
    {
      name: 'spa-fallback',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const url = req.url?.split('?')[0] || ''
          if (url.endsWith('.html') && url !== '/index.html') {
            req.url = '/index.html'
          }
          next()
        })
      }
    }
  ],
  server: {
    port: 3000,
    open: true,
    fs: {
      allow: ['..']
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      }
    }
  },
  publicDir: 'public',
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
})
