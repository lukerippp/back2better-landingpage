// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: true },

  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/test-utils",
    // '@nuxt/ui'
    "@nuxt/ui-pro",
  ],
  css: ["~~/app/assets/css/main.css"],
  // routeRules: {
  //   "/": { prerender: true },
  // },
});
