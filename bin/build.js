import * as esbuild from 'esbuild'

esbuild.build({
    entryPoints: ['./resources/js/index.js'],
    outfile: './resources/dist/carousel.js',
    bundle: true,
    mainFields: ['module', 'main'],
    platform: 'browser',
    treeShaking: true,
    target: ['es2020'],
    minify: true
})