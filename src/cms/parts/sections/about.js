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
        { label: "Description", name: "description", widget: "markdown" },
        { label: "descr", name: "descr", widget: "markdown" },
        {
            label: "Button label",
            name: "label",
            widget: "string",
            required: false,
        },
        {
            label: "Image",
            name: "image",
            widget: "image",
            required: false,
        },
    ],
};

export default about;
