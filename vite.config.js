import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    devSourcemap: true,

    preprocessorOptions: {
      scss: {
        additionalData: `@use "${path.resolve(__dirname, 'src/assets/scss/common/mixins')}" as *;`
      }
    }
  }
})
