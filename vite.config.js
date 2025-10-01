import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Configuration pour GitHub Pages - base URL pour le déploiement (dépôt personnalisé)
  base: './',
  plugins: [react()],
});
