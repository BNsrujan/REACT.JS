import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import reactRefresh from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
      outDir: 'build',
  }
  plugins: [
      reactRefresh(),
      svgrPlugin({
          svgrOptions: {
              icon: true,
          },
      }),
  ],
 
 })