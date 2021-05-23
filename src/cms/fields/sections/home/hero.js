const hero = {
  label: "Hero section",
  name: "home-hero",
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
      label: "Subtitle",
      name: "description",
      widget: "text",
      required: false,
    },
    {
      label: "Background image",
      name: "image",
      widget: "image",
      required: false,
    },
  ],
};

export default hero;
