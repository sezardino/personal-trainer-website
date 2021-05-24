const commonData = {
  file: "static/data/site/common-data.md",
  editor: {
    preview: false,
  },
  label: "Common Data",
  name: "common-data",
  fields: [
    { label: "Logotype", name: "logo", widget: "image", required: false },
    {
      label: "Contact Data",
      name: "contact-data",
      widget: "object",
      required: false,
      fields: [
        {
          label: "Phone number",
          name: "tel",
          widget: "string",
          required: false,
        },
        { label: "Email", name: "mail", widget: "string", required: false },
        {
          label: "Facebook",
          name: "facebook",
          widget: "string",
          required: false,
        },
        {
          label: "Instagram",
          name: "instagram",
          widget: "string",
          required: false,
        },
        { label: "VK", name: "vk", widget: "string", required: false },
      ],
    },
  ],
};

export default commonData;
