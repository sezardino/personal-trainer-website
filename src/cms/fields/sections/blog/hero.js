const hero = {
  label: "Hero Section",
  name: "blog-hero",
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
      label: "Background Image",
      name: "image",
      widget: "image",
      required: false,
    },
    {
      label: "Description",
      name: "description",
      widget: "text",
      required: false,
    },
  ],
};

export default hero;
