import seo from "../parts/seo";
import aboutSections from "../sections/about";

const about = {
    file: "static/data/pages/about.md",
    label: "About Page",
    name: "about-page",
    fields: [
        {
            label: "Template Key - about-page. Do not change that",
            name: "templateKey",
            widget: "string",
            default: "about-page",
        },
        seo,
        ...aboutSections,
    ],
};

export default about;
