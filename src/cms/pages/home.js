import seo from "../parts/seo";
import hero from "../parts/sections/hero";
import about from "../parts/sections/about";
import services from "../parts/sections/services";
import blog from "../parts/sections/blog";
import defaultPage from "../parts/defaultCollection";

const page = {
    label: "Home Page",
    name: "home-page",
    folder: "content/pages/home",
    file: "content/pages/home/index.md",
    ...defaultPage,
    fields: [
        {
            label: "Template Key - index-page. Do not change that",
            name: "templateKey",
            widget: "string",
            default: "index-page",
        },
        seo,
        {
            label: "Sections",
            name: "sections",
            widget: "object",
            required: false,
            fields: [hero, about, services, blog],
        },
    ],
};

export default page;
