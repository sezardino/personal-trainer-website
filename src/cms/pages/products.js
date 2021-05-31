import blog from "../parts/sections/blog";
import hero from "../parts/sections/hero";
import seo from "../parts/seo";
import defaultPage from "../parts/defaultCollection";

const page = {
    label: "Products Page",
    name: "products-page",
    folder: "content/pages/products",
    file: "content/pages/products/index.md",
    ...defaultPage,
    fields: [
        {
            label: "Template Key - product-page. Do not change that",
            name: "templateKey",
            widget: "string",
            default: "product-page",
        },
        seo,
        {
            label: "Sections",
            name: "sections",
            widget: "object",
            required: false,
            fields: [hero, blog],
        },
    ],
};

export default page;
