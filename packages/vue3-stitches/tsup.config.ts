import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  clean: true,
  format: ['cjs', 'esm'],
  external: [
    'vue',
    /stitches\/core\/.*/,
  ],
  dts: true,
  minify: false,
})
