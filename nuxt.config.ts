// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: process.env.NODE_ENV === "development" },
  app: {
    head: {
      htmlAttrs: {
        lang: "es",
      },
    },
  },
  modules: [
    "@nuxt/eslint",
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
  ],
  tailwindcss: { cssPath: "~/assets/css/main.css" },
  typescript: {
    strict: true,
    typeCheck: false,
  },
});
