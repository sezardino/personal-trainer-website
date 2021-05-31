import seo from "../parts/seo";
import hero from "../parts/sections/hero";
import defaultPage from "../parts/defaultCollection";

const page = {
    label: "Blog Page",
    name: "blog-page",
    folder: "content/pages/blog",
    file: "content/pages/blog/index.md",
    ...defaultPage,
    fields: [
        {
            label: "Template Key - blog-page. Do not change that",
            name: "templateKey",
            widget: "string",
            default: "blog-page",
        },
        seo,
        {
            label: "Sections",
            name: "sections",
            widget: "object",
            required: false,
            fields: [hero],
        },
    ],
};

export default page;
