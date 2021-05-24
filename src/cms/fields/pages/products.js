import seo from "../parts/seo";
import productSections from "../sections/products";

const products = {
    file: "static/data/pages/products.md",
    label: "Products Page",
    name: "products-page",
    fields: [
        {
            label: "Template Key - product-page. Do not change that",
            name: "templateKey",
            widget: "string",
            default: "product-page",
        },
        seo,
        // {
        //     label: "Sections",
        //     name: "sections",
        //     widget: "object",
        //     required: false,
        //     fields: productSections,
        // },
    ],
};

export default products;
