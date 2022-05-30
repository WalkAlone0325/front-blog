import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import UnoCss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    UnoCss(),
    vue({
      reactivityTransform: true
    }),
    AutoImport({
      imports: ['vue', '@vueuse/core', '@vueuse/head', 'vue-router']
    })
  ]
})
