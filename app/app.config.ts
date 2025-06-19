export default defineAppConfig({
  ui: {
    colors: {
      primary: "blue",
      neutral: "slate",
    },
  },
  uiPro: {
    banner: {
      slots: {
        root: "bg-primary text-white py-12 flex flex-col items-center text-center justify-center",
        title: "text-3xl font-bold text-white",
        container: "flex items-center justify-between gap-3 h-12",
      },
    },
    pageHero: {
      slots: {
        title: "text-2xl font-bold font-display",
        headline: "text-primary text-6xl",
        root: "pt-16",
        content: "flex items-center gap-8",
      },
    },
    pageSection: {
      slots: {
        title: "text-4xl font-bold",
      },
    },
    formField: {
      slots: {
        label: "text-lg font-bold",
        size: "lg",
      },
    },
    pageCard: {
      slots: {
        title: "text-lg font-bold",
      },
    },
  },
});
