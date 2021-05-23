const contact = {
  label: "Contact section",
  name: "contact",
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
      label: "Button label",
      name: "label",
      widget: "string",
      required: false,
    },
  ],
};

export default contact;
