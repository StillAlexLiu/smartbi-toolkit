import {defineConfig} from 'tsdown'

export default defineConfig({
    exports: true,
    // ...config options
    dts: true,
    fixedExtension:false,
    entry: [
        './src/index.ts',
        './src/vite-plugin/vite-plugin-smartbi.ts',
        './src/vite-plugin/vite-plugin-smartbix.ts',
        './src/service/*.ts'
    ],
})
