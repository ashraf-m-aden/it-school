// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: [
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@pinia/nuxt',
    'usebootstrap',
    'nuxt-feather-icons',
  ], 
  css: ["@/assets/style/style.scss"], // Load global SCSS
  nitro: {
    firebase: {
      gen: 2
    }
  }
})