import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'
import { copyFileSync, writeFileSync } from 'fs'

// Plugin to add GitHub Pages SPA support files
function githubPagesPlugin() {
  return {
    name: 'github-pages',
    closeBundle() {
      const outDir = resolve(__dirname, '../../docs')
      // Copy index.html to 404.html for SPA routing
      copyFileSync(resolve(outDir, 'index.html'), resolve(outDir, '404.html'))
      // Create .nojekyll to prevent Jekyll processing
      writeFileSync(resolve(outDir, '.nojekyll'), '')
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
