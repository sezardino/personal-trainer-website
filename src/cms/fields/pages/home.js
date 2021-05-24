import seo from "../parts/seo";
import homeSections from "../sections/home";

const home = {
  file: "static/data/pages/home.md",
  label: "Home Page",
  name: "home-page",
  fields: [
    seo,
    {
      label: "Template Key",
      name: "template-hey",
      widget: "hidden",
      default: "index-page",
    },
    ...homeSections,
  ],
};

export default home;
