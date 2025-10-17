import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  base: "/fundacaoregenerativa/",
  server: {
    host: true,
    port: 8080,
  },
  plugins: [react()],
});
