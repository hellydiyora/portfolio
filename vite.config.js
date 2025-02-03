import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/portfolio/",
  plugins: [
    react(),
    tailwindcss({
      content: ["./index.html", "./src/**/**/*.{js,ts,jsx,tsx}"],
      darkMode: "class",
      theme: {
        extend: {
          fontFamily: {
            gilroy: ["Gilroy", "sans-serif"],
            dealoras: ["Dealoras", "sans-serif"],
            askilon: ["Askilon", "sans-serif"],
          },
        },
      },
      plugins: [],
    }),
  ],
});
