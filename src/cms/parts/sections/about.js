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
            name: "description",
            widget: "list",
            fields: [
                {
                    label: "Paragraph",
                    name: "paragraph",
                    widget: "string",
                    required: false,
                },
            ],
        },,
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
