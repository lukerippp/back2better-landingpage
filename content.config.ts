import { defineContentConfig, defineCollection } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    hero: defineCollection({
      type: "page",
      source: "**/*.md",
    }),
  },
});
