import { VitePWA } from "vite-plugin-pwa";
import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/background-and-text",
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
    tailwindcss(),
    VitePWA({
      devOptions: {
        enabled: true
      },
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "mask-icon.svg"],
      manifest: {
        name: "BackgroundAndText",
        short_name: "BAT",
        description: "Background and Text",
        theme_color: "#ffffff",
        icons: [
          {
            sizes: "192x192",
            src: "/background-and-text/pwa-192x192.png",
            type: "image/png",
          },
          {
            sizes: "512x512x",
            src: "/background-and-text/pwa-512x512.png",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
