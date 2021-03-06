import hero from "../parts/sections/hero";
import defaultPage from "../parts/defaultCollection";

const page = {
    label: "404",
    name: "no-page",
    folder: "content/pages/404",
    file: "content/pages/404/index.md",
    ...defaultPage,
    fields: [hero],
};

export default page;
