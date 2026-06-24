import {defineConfig} from 'tsdown'

export default defineConfig({
    exports: true,
    dts: true,
    fixedExtension: false,
    external: ['axios'],
    entry: [
        './src/index.ts',
        './src/vite-plugin/vite-plugin-smartbi.ts',
        './src/vite-plugin/vite-plugin-smartbix.ts',
        './src/service/*.ts'
    ],
    clean: true,
})
