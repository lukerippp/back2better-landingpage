export default defineAppConfig({
  ui: {
    colors: {
      primary: "blue",
      neutral: "slate",
      background: "slate",
    },
  },
  uiPro: {
    banner: {
      slots: {
        root: "bg-primary text-white py-12 flex flex-col items-center text-center justify-center",
        title: "display-h3 font-bold text-white",
        container: "flex items-center justify-between",
      },
    },
    pageHero: {
      slots: {
        title: "display-h1 font-bold ",
        headline: "text-primary text-6xl",
        root: "space-y-6 py-6",
        container: "max-w-full !px-14 !py-16",
      },
    },
    pageSection: {
      slots: {
        title: "display-h1 font-bold",
        description: "sm:text-h5 lg:text-h5",
        root: "pt-2 pb-2 py-2 !mb-0",
        headline: "text-primary text-5xl",
      },
    },
    formField: {
      slots: {
        root: "",
        label: "display-h1 font-bold",
        description: "sm:text-h5 lg:text-h5",
        size: "lg",
      },
    },
    pageCard: {
      slots: {
        title: "sm: text-h4 lg: text-h4",
        description: "sm:display-h6 lg:display-h6",
        orientation: "vertical",
      },
    },
    seperator: {
      slots: {
        label: "display-h2 font-bold",
      },
    },
  },
});
