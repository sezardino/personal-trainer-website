import seo from "../parts/seo";
import hero from "../parts/sections/hero";
import defaultPage from "../parts/defaultCollection";

const page = {
    label: "About Page",
    name: "about-page",
    folder: "content/pages/about",
    file: "content/pages/about/index.md",
    ...defaultPage,
    fields: [
        {
            label: "Template Key - about-page. Do not change that",
            name: "templateKey",
            widget: "string",
            default: "about-page",
        },
        seo,
        {
            label: "Sections",
            name: "sections",
            widget: "object",
            required: false,
            fields: [hero],
        },
        {
            label: "Body",
            name: "body",
            widget: "markdown",
            default: "",
            required: false,
        },
    ],
};

export default page;
