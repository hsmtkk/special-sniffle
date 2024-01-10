// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@invictus.codes/nuxt-vuetify', "@nuxt/image"],
  runtimeConfig: {
    API_KEY: process.env.API_KEY,
  }
})