import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // The app chunk stays lean; heavy, rarely-changing code is split into
    // long-cacheable vendor chunks so a content update never re-downloads them.
    chunkSizeWarningLimit: 900,
    rollupOptions: {
      output: {
        manualChunks(id) {
          // One chunk per deck so each is independently cacheable and none is huge.
          const deck = id.match(/\/data\/cards\/([a-z]+)\.json$/);
          if (deck) return `deck-${deck[1]}`;
          if (id.includes('node_modules/firebase') || id.includes('node_modules/@firebase')) return 'firebase';
          if (id.includes('node_modules/react') || id.includes('node_modules/scheduler')) return 'react-vendor';
          return undefined;
        },
      },
    },
  },
  test: {
    environment: 'node',
    globals: true,
  },
});
