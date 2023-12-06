import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  server: {
    port: 5558, // Specify the port you want to use
  },
  define: {
    "import.meta.env.BASE_URL": JSON.stringify(
      process.env.BASE_URL || "http://localhost:5558"
    ),
  },
});
