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
        { label: "Description", name: "description", widget: "text" },
        {
            label: "Description List",
            name: "descriptionList",
            widget: "list",
            field: {
                label: "Description item",
                name: "descriptionItem",
                widget: "text",
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
