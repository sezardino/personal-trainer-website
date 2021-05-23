import CMS from "netlify-cms-app";
import pages from "./fields/pages";
import posts from "./fields/posts";
import site from "./fields/site";
// import uploadcare from 'netlify-cms-media-library-uploadcare'
// import cloudinary from 'netlify-cms-media-library-cloudinary'

// import AboutPagePreview from './preview-templates/AboutPagePreview'
// import BlogPostPreview from './preview-templates/BlogPostPreview'
// import ProductPagePreview from './preview-templates/ProductPagePreview'
// import IndexPagePreview from './preview-templates/IndexPagePreview'

// CMS.registerMediaLibrary(uploadcare)
// CMS.registerMediaLibrary(cloudinary)

// CMS.registerPreviewTemplate('index', IndexPagePreview)
// CMS.registerPreviewTemplate('about', AboutPagePreview)
// CMS.registerPreviewTemplate('products', ProductPagePreview)
// CMS.registerPreviewTemplate('blog', BlogPostPreview)

CMS.init({
  config: {
    load_config_file: false,
    backend: {
      name: "test-repo",
      branch: "master",
      repo: "sezardino/personal-trainer-website",
    },
    commit_messages: {
      create: "Create {{collection}} “{{slug}}”",
      update: "Update {{collection}} “{{slug}}”",
      delete: "Delete {{collection}} “{{slug}}”",
      uploadMedia: "[skip ci] Upload “{{path}}”",
      deleteMedia: "[skip ci] Delete “{{path}}”",
    },
    publish_mode: "editorial_workflow",
    media_folder: "static/img",
    public_folder: "/img",
    collections: [site, pages, posts],
    // collections: [site, pages, works, collections],
  },
});
