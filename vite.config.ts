import {defineConfig} from "vite";
import dts from 'vite-plugin-dts'

export default defineConfig({
    base: './',
    plugins: [dts()],
    build: {
        minify: true,
        lib: {
            entry: {
                SmartbiToolkit: './src/index.ts',
                CatalogService: './src/methods/CatalogService.ts',
            },
            // entry:'./src/index.ts',
            name: 'smartbi-toolkit',
            formats: ['es'],
            fileName: (format: string, entryName: string) => `${entryName}.${format}.js`,
        },
        rolldownOptions: {
            external: ['axios'],
        }
    },
    server: {
        proxy: {
            '/smartbi': {
                target: 'http://smartbi.dlmrsj.cn:28080/smartbi',
                rewrite: (path) => path.replace(/^\/smartbi/, '/'),
            },
            '/smartbix': {
                // target: 'http://localhost:18080/smartbix',
                target: 'http://192.168.100.167:18080/smartbix',
                rewrite: (path) => path.replace(/^\/smartbix/, '/'),
            },
        },
    },
})
