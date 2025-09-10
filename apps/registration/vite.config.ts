import { defineConfig } from 'vite';
import { nxAngularVitePlugin } from '@nx/angular/vite';

export default defineConfig(() => ({
  plugins: [nxAngularVitePlugin({})],
}));
