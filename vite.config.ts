import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
// import devtools from 'solid-devtools/vite';
import { viteStaticCopy } from 'vite-plugin-static-copy'
export default defineConfig({
    plugins: [
        solidPlugin(),
        viteStaticCopy({
            targets: [
                // Копируем изображения из папки public/icons в dist/icons
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
