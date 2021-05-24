// base field
const base = {
  label: "Base component",
  name: "base",
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
      label: "Description",
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

export default base;
