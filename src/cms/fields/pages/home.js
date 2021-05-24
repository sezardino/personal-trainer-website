import seo from "../parts/seo";
import homeSections from "../sections/home";

const home = {
    file: "static/data/pages/home.md",
    label: "Home Page",
    name: "home-page",
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
            fields: homeSections,
        },
    ],
};

export default home;
