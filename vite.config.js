import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      sass: {
        // 全局共享的 Sass 变量文件，可选
        // 在这里可以引入你的全局样式变量
        additionalData: `@import "@/styles/variables.scss";`
      },
    },
  },
  envDir: 'env',
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
