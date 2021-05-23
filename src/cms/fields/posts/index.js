import seo from "../parts/seo";

const posts = {
  label: "Post",
  name: "post",
  folder: "static/data/posts",
  create: true,
  slug: "{{slug}}",
  fields: [
    {
      label: "Template Key",
      name: "template-ley",
      widget: "hidden",
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
    { label: "Publish Date", name: "date", widget: "datetime" },
    { label: "Featured Post", name: "featuredpost", widget: "boolean" },
    { label: "Body", name: "body", widget: "markdown" },
    { label: "Tags", name: "tags", widget: "list" },
  ],
};

export default posts;
