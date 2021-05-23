import seo from "../parts/seo";
import aboutSections from "../sections/about";

const about = {
  file: "static/data/pages/about.md",
  label: "About Page",
  name: "about-page",
  fields: [
    seo,
    {
      label: "Template Key",
      name: "template-key",
      widget: "hidden",
      default: "about-page",
    },
    ...aboutSections,
  ],
};

export default about;
