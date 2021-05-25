import seo from "../parts/seo";

const posts = {
    label: "Post",
    name: "post",
    folder: "static/pages/blog",
    create: true,
    slug: "{{slug}}",
    editor: {
        preview: false,
    },
    fields: [
        {
            label: "Template Key - blog-post. Do not change that",
            name: "templateKey",
            widget: "string",
            default: "blog-post",
        },
        seo,
        {
            label: "Title",
            name: "title",
            widget: "string",
            required: false,
        },
        {
            label: "Excerpt",
            name: "excerpt",
            widget: "text",
            required: false,
        },
        {
            label: "Featured Image",
            name: "featured-image",
            widget: "image",
            required: false,
        },
        {
            label: "Publish Date",
            name: "date",
            widget: "datetime",
            required: false,
        },
        {
            label: "Featured Post",
            name: "featuredpost",
            widget: "boolean",
            required: false,
        },
        { label: "Body", name: "body", widget: "markdown", required: false },
        { label: "Tags", name: "tags", widget: "list", required: false },
    ],
};

export default posts;
