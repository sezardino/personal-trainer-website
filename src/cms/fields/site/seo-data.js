const seoData = {
  file: "static/data/site/seo-data.md",
  editor: {
    preview: false,
  },
  label: "Seo Data",
  name: "seo-data",
  fields: [
    {
      label: "Keywords",
      name: "keywords",
      widget: "list",
      fields: -{ label: "Key", name: "key", widget: "string", required: false },
    },
  ],
};

export default seoData;
