import button from "../button";

const hero = {
    label: "Offer section",
    name: "offer",
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
        button,
        {
            label: "List of offers",
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
                    label: "Description list",
                    name: "list",
                    widget: "list",
                    fields: [
                        {
                            label: "item",
                            name: "item",
                            widget: "string",
                            required: false,
                        },
                    ],
                },
                {
                    label: "Price",
                    name: "price",
                    widget: "string",
                    required: false,
                },
            ],
        },
    ],
};

export default hero;
