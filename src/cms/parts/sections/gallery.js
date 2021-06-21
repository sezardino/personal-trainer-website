import button from "../button";

const hero = {
    label: "Gallery section",
    name: "gallery",
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
            label: "Gallery list",
            name: "list",
            widget: "list",
            fields: [
                {
                    label: "Name",
                    name: "name",
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
        },
    ],
};

export default hero;
