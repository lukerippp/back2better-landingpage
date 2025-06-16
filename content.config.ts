import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: "page",
      source: "blog/*.md",
    }),
    content: defineCollection({
      type: "page",
      source: "**/*.md",
      schema: z.object({
        // tags: z.array(z.string()),
        // image: z.string(),
        // date: z.date(),
        description: z.string(),
        title: z.string(),
        image: z.object({
          src: z.string(),
          alt: z.string(),
        }),
        image2: z.object({
          src: z.string(),
          alt: z.string(),
        }),
        image3: z.object({
          src: z.string(),
          alt: z.string(),
        }),
        image4: z.object({
          src: z.string(),
          alt: z.string(),
        }),
        image5: z.object({
          src: z.string(),
          alt: z.string(),
        }),
        cards: z.array(
          z.object({
            title: z.string(),
            description: z.string(),
            image: z.object({
              src: z.string(),
              alt: z.string(),
            }),
          })
        ),
        features: z.array(
          z.object({
            title: z.string(),
            description: z.string(),
            icon: z.object({}),
          })
        ),
        faqs: z.array(
          z.object({
            question: z.string(),
            answer: z.string(),
          })
        ),
      }),
    }),
  },
});
