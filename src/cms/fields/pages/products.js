import seo from "../parts/seo";
import productSections from "../sections/products";

const products = {
  file: "static/data/pages/products.md",
  label: "Products Page",
  name: "products-page",
  fields: [
    seo,
    {
      label: "Template Key",
      name: "template-key",
      widget: "hidden",
      default: "about-page",
    },
    ...productSections,
  ],
};

export default products;
