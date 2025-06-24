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
        image6: z.object({
          src: z.string(),
          alt: z.string(),
        }),
        image7: z.object({
          src: z.string(),
          alt: z.string(),
        }),
        image8: z.object({
          src: z.string(),
          alt: z.string(),
        }),
        image9: z.object({
          src: z.string(),
          alt: z.string(),
        }),
        image10: z.object({
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
        features2: z.array(
          z.object({
            title: z.string(),
            description: z.string(),
            icon: z.object({}),
          })
        ),
        info: z.object({
          headline: z.string(),
          title: z.string(),
          description: z.string(),
          image: z.object({
            src: z.string(),
            alt: z.string(),
          }),
        }),
        betaform: z.object({
          title: z.string(),
          description: z.string(),
        }),
      }),
    }),
  },
});
