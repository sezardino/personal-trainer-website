import seo from "../parts/seo";
import hero from "../parts/sections/hero";
import about from "../parts/sections/about";
import blog from "../parts/sections/blog";
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
            fields: [hero, about, blog],
        },
    ],
};

export default page;
