const about = {
  label: "About Section",
  name: "homeAbout",
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
    { label: "Button label", name: "label", widget: "string", required: false },
    {
      label: "Image",
      name: "image",
      widget: "image",
      required: false,
    },
  ],
};

export default about;
