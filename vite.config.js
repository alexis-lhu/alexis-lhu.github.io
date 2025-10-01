import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Configuration pour GitHub Pages - base URL pour le déploiement (dépôt personnalisé)
  base: './',
  plugins: [react()],
  build: {
    // Configuration pour éviter les problèmes de MIME type sur GitHub Pages
    rollupOptions: {
      output: {
        // S'assurer que les fichiers JS ont la bonne extension
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    }
  }
});
