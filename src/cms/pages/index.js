import noPage from "./404";
import about from "./about";
import blog from "./blog";
import contact from "./contact";
import home from "./home";
import products from "./products";

const pages = {
    name: "pages",
    label: "Pages",
    editor: {
        preview: false,
    },
    files: [home, about, products, blog, contact, noPage],
};

export default pages;
