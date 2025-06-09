// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: "2025-01-15",
  modules: ["@nuxt/eslint", "@nuxt/ui-pro", "@nuxt/content"],
  devtools: {
    enabled: true,
  },
  css: ["~/assets/css/main.css"],
  // routeRules: {
  //   "/": { prerender: true },
  // },
  eslint: {
    config: {
      stylistic: {
        commaDangle: "never",
        braceStyle: "1tbs",
      },
    },
  },
});
