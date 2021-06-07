const hero = {
    label: "Hero section",
    name: "hero",
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
            label: "Title format",
            name: "titleFormat",
            widget: "select",
            options: ["default", "breaking"],
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
