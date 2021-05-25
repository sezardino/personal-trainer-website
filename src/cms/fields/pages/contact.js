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
        {
            label: "Sections",
            name: "sections",
            widget: "object",
            required: false,
            fields: contactSections,
        },
    ],
};

export default contact;
