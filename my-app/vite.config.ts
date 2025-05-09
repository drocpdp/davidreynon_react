import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/davidreynon_react/' : '/',
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'dist/index.html',
          dest: '.', // place in dist/ as 404.html
          rename: '404.html'
        }
      ]
    })
  ]
}));
