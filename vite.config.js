import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

export default defineConfig({
  plugins: [
    react(),
    eslint({
      emitWarning: true, // Opcional: Mostrar advertencias
      emitError: false,  // Opcional: Ignorar errores críticos
    }),
  ],
});