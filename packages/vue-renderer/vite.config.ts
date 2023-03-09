import { defineConfig } from 'vite';
import LibTypes from 'vite-plugin-lib-types';
import pkg from './package.json';

export default defineConfig({
  plugins: [LibTypes({ fileName: 'vue-renderer.d.ts' })],
  build: {
    lib: {
      entry: 'src/index.ts',
      fileName: () => 'vue-renderer.mjs',
      formats: ['es'],
    },
    rollupOptions: {
      external: [
        ...Object.keys(pkg.dependencies),
        ...Object.keys(pkg.peerDependencies),
      ].filter((item) => !item.includes('@alilc')),
    },
  },
});