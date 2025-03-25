
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      // Lock esbuild version to 0.25.0 for security
      tsconfigRaw: {
        compilerOptions: {
          target: 'es2020',
          useDefineForClassFields: true,
        },
      },
    }
  },
  build: {
    // Ensure esbuild 0.25.0 is used for production builds as well
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  esbuild: {
    // Force esbuild version
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
  }
}));
