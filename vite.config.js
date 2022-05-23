import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    babel: {
      plugins: [
        [
          'babel-plugin-styled-components',
          {
            displayName: true,
            fileName: true
          }
        ]
      ]
    }
  })],
  server: {
    port: 9901
  },
  build: {
    outDir: "build"
  }
})
