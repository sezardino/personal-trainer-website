import seo from "../parts/seo";
import blogSections from "../sections/blog";

const blog = {
  file: "static/data/pages/blog.md",
  label: "Blog Page",
  name: "blog-page",
  fields: [
    seo,
    {
      label: "Template Key",
      name: "template-key",
      widget: "hidden",
      default: "about-page",
    },
    // ...blogSections,
  ],
};

export default blog;
