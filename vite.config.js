import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Default port if VITE_PORT is not defined
  const port = parseInt(import.meta.env.VITE_PORT) || 5173;
  return {
    plugins: [react()],
    server: {
      host: '0.0.0.0',
      port: port,
    },
  };
});
