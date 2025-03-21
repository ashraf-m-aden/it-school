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
    '@nuxtjs/seo'
  ], 
  css: ["@/assets/style/style.scss"], // Load global SCSS
  site: {
    url: 'https://it-advanced-technology.com',
    name: 'IT+ ADVANCED TECHHNOLOGY',
    description: 'Welcome to my awesome site!',
    defaultLocale: 'fr', // not needed if you have @nuxtjs/i18n installed
  }
})