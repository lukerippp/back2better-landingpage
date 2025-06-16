export default defineAppConfig({
  ui: {
    colors: {
      primary: "blue",
      neutral: "pink",
    },
  },
  uiPro: {
    banner: {
      slots: {
        root: "bg-primary text-white py-12",
        title: "text-3xl font-bold text-white",
      },
    },
  },
});
