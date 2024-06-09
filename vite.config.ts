import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import { viteStaticCopy } from 'vite-plugin-static-copy'





export default defineConfig({
    plugins: [
        solidPlugin(),
        viteStaticCopy({
            targets: [
                { src: 'public', dest: '' },
            ],
        }),
    ],
    server: {
        port: 3000,
    },
    build: {
        target: 'esnext',
        outDir: 'dist',
    },
    preview: {
        host: true,
        port: 3000,
    },
})
