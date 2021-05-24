const services = {
  label: "Services section",
  name: "homeServices",
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
      label: "List of services",
      name: "list",
      widget: "list",
      fields: [
        {
          label: "Image",
          name: "image",
          widget: "image",
          required: false,
        },
        {
          label: "Name of the service",
          name: "name",
          widget: "string",
          required: false,
        },
        {
          label: "Description of the service",
          name: "description",
          widget: "text",
          required: false,
        },
      ],
    },
  ],
};

export default services;
