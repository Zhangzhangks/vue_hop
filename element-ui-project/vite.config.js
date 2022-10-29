import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(), WindiCSS(),
    ],
    server: {
        proxy: {
            '/api': {
                target: ' http://ceshi13.dishait.cn',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    }
})