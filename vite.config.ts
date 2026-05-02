import { defineConfig } from 'vite'
import type { Plugin } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

/**
 * A custom Vite plugin to resolve imports with the "figma:assets/" prefix.
 */
function figmaAssetsResolver(): Plugin {
  const FIGMA_ASSETS_PREFIX = 'figma:asset/';

  return {
    name: 'vite-plugin-figma-assets-resolver',

    resolveId(id: string) {
      if (id.startsWith(FIGMA_ASSETS_PREFIX)) {
        const assetPath = id.substring(FIGMA_ASSETS_PREFIX.length);
        return path.resolve('src/assets', assetPath);
      }
      return null;
    },
  };
}

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    figmaAssetsResolver()
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
