import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/venture-solar-crm-timeline/',
  server: { port: 3000 },
});
