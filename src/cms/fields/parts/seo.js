const seo = {
  label: "SEO Settings",
  name: "seo",
  widget: "object",
  collapsed: true,
  fields: [
    {
      label: "Title",
      name: "title",
      widget: "string",
      required: false,
    },
    {
      label: "Meta Description",
      name: "description",
      widget: "text",
      required: false,
    },
    {
      label: "Image",
      name: "image",
      widget: "image",
      required: true,
    },
  ],
};

export default seo;
