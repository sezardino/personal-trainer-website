import button from "../button";

const about = {
  label: "About Section",
  name: "about",
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
      name: "desc",
      widget: "list",
      field: {
        label: "Paragraph",
        name: "paragraph",
        widget: "text",
        required: false,
      },
    },
    button,
    {
      label: "Image",
      name: "image",
      widget: "image",
      required: false,
    },
  ],
};

export default about;
