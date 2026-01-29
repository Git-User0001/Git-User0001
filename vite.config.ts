import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // Safely replace process.env.API_KEY. 
    // If the env var is not set, this becomes undefined (which is valid JS) rather than crashing.
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY)
  }
});