import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import electron from 'vite-plugin-electron'
import electronRender from 'vite-plugin-electron-renderer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),electronRender(),electron({
    entry:'electron/main.ts'
  })],
  server:{
    hmr:true,
  }
})
