import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html',
        login: 'login.html',
        home: 'home.html',
        phoneEmail: 'phone-email.html',
        community: 'community.html'
      }
    }
  }
});