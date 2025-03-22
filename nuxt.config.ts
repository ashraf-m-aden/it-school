// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: [
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@pinia/nuxt',
    'nuxt-feather-icons',
  ], 
  plugins: [
    '~/plugins/bootstrap.client.ts',
  ],
  css: ["bootstrap/dist/css/bootstrap.min.css", "@/assets/style/custom.scss",], // Load global SCSS
  nitro: {

    preset: 'netlify_edge'
  }, image: {
    provider: 'netlify',
  },
  ssr: false
})