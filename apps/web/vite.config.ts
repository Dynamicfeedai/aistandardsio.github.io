import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'
import { copyFileSync, writeFileSync, mkdirSync, existsSync } from 'fs'

// Plugin to add GitHub Pages SPA support files and MkDocs assets
function githubPagesPlugin() {
  return {
    name: 'github-pages',
    closeBundle() {
      const outDir = resolve(__dirname, '../../docs')
      const pkgRoot = resolve(__dirname, '../../')

      // Copy index.html to 404.html for SPA routing
      copyFileSync(resolve(outDir, 'index.html'), resolve(outDir, '404.html'))
      // Create .nojekyll to prevent Jekyll processing
      writeFileSync(resolve(outDir, '.nojekyll'), '')
      // Create CNAME for custom domain
      writeFileSync(resolve(outDir, 'CNAME'), 'aistandards.io')

      // Copy MkDocs theme assets (CSS and navbar JS) for cross-site usage
      const cssDir = resolve(outDir, 'css')
      const jsDir = resolve(outDir, 'js')
      if (!existsSync(cssDir)) mkdirSync(cssDir, { recursive: true })
      if (!existsSync(jsDir)) mkdirSync(jsDir, { recursive: true })

      // Copy from package sources if they exist
      const mkdocsCssSrc = resolve(pkgRoot, 'packages/mkdocs-theme/aistandardsio-mkdocs.css')
      const navbarJsSrc = resolve(__dirname, 'public/js/lit-navbar.js')

      if (existsSync(mkdocsCssSrc)) {
        copyFileSync(mkdocsCssSrc, resolve(cssDir, 'aistandardsio-mkdocs.css'))
      }
      if (existsSync(navbarJsSrc)) {
        copyFileSync(navbarJsSrc, resolve(jsDir, 'lit-navbar.js'))
      }
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), githubPagesPlugin()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: '../../docs',
    emptyOutDir: true,
  },
})
