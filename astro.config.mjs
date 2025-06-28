import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel';

export default defineConfig({
  integrations: [
    react(), 
    mdx({
      remarkPlugins: [],
      rehypePlugins: [],
      extendMarkdownConfig: false,
    })
  ],
  vite: {
    css: {
      postcss: './postcss.config.js',
    },
    resolve: {
      alias: {
        '@': '/src',
        '@/components': '/src/components',
      },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'charts': ['@nivo/bar', '@nivo/core'],
            'icons': ['lucide-react'],
            'react-vendor': ['react', 'react-dom'],
          }
        }
      }
    }
  },
  output: 'static',
  adapter: vercel({
    webAnalytics: {
      enabled: true, // set to false when using @vercel/analytics@1.4.0
    },
    functionPerRoute: false,
    runtime: 'nodejs20.x',
  }),
});