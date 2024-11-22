import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import javascriptObfuscator from "vite-plugin-javascript-obfuscator";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    javascriptObfuscator({
      include: ["src/**/*.js", "src/**/*.ts", "src/**/*.jsx"], // Add .jsx here
      exclude: [], // Exclude any files or directories
      options: {
        compact: true, // Minify the code
        controlFlowFlattening: true, // Make the control flow more complex
        deadCodeInjection: true, // Inject dead code to confuse reverse engineering
      },
    }),
  ],
});
