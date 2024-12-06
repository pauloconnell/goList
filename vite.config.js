import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: 'frontend/src', // Define the root directory for components
  publicDir: '/public', // Define the public directory for images ect
  build: {
    outDir: '/dist', // Define the output directory
  },
});
