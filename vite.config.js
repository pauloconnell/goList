import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: { 
   // proxy: { '/api': 'http://localhost:3000' }, 
    port: 5173, 
    open: true
  },
  root: path.resolve(__dirname, 'frontend/src'), // Define the root directory for components
  publicDir: 'public', // Define the public directory for images .css ect


   build: {
     outDir: '/public/dist',// Define the output directory
     rollupOptions: { 
         input: 'public/index.html', // Explicitly define the entry point 
//         output: {
//             entryFileNames: 'assets/[name].js', chunkFileNames: 'assets/[name].js', assetFileNames: 'assets/[name].[ext]', 
//         }
     },
   },
});
