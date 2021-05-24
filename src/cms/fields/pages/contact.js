import seo from "../parts/seo";
import contactSections from "../sections/contact";

const contact = {
    file: "static/data/pages/contact.md",
    label: "Contact Page",
    name: "contact-page",
    fields: [
        {
            label: "Template Key - contact-page. Do not change that",
            name: "templateKey",
            widget: "string",
            default: "about-page",
        },
        seo,
        ...contactSections,
    ],
};

export default contact;
