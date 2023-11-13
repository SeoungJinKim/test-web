import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    './node_modules/my-design-system-test2/dist/panda.buildinfo.json',
    // './node_modules/my-design-system-test2/src/**/*.tsx',
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  // The output directory for your css system
  emitPackage: true,
  outdir: '@seongjin/styled-system',
})
