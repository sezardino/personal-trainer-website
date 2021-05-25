import seo from "../parts/seo";
import blogSections from "../sections/blog";

const blog = {
    file: "static/data/pages/blog.md",
    label: "Blog Page",
    name: "blog-page",
    fields: [
        {
            label: "Template Key - blog-page. Do not change that",
            name: "templateKey",
            widget: "string",
            default: "blog-page",
        },
        seo,
        // {
        //     label: "Sections",
        //     name: "sections",
        //     widget: "object",
        //     required: false,
        //     fields: blogSections,
        // },
    ],
};

export default blog;
