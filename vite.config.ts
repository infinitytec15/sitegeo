import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { tempo } from "tempo-devtools/dist/vite";

// Detecta se estamos em dev ou produção
const isDev = process.env.NODE_ENV === "development";

// Caminho base para deploy em subpasta
const basePath = isDev ? "/" : "/sitegeo/";

export default defineConfig({
  base: basePath,

  optimizeDeps: {
    entries: ["src/main.tsx", "src/tempobook/**/*"],
  },

  plugins: [
    react(),
    tempo(),
  ],

  resolve: {
    preserveSymlinks: true,
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  server: {
    host: true, // permite acesso externo se necessário
    port: 5173,
    strictPort: true,
    // @ts-ignore
    allowedHosts: true,
  },
});
