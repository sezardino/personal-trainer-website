import seo from "../parts/seo";
import contactSections from "../sections/contact";

const contact = {
  file: "static/data/pages/contact.md",
  label: "Contact Page",
  name: "contact-page",
  fields: [
    seo,
    {
      label: "Template Key",
      name: "template-key",
      widget: "hidden",
      default: "about-page",
    },
    ...contactSections,
  ],
};

export default contact;
