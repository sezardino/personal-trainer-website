import seo from "../parts/seo";
import contact from "../parts/sections/contact";
import defaultPage from "../parts/defaultCollection";

const page = {
    label: "Contact Page",
    name: "contact-page",
    folder: "content/pages/contact",
    file: "content/pages/contact/index.md",
    ...defaultPage,
    fields: [
        {
            label: "Template Key - contact-page. Do not change that",
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
            fields: [contact],
        },
    ],
};

export default page;
