import React from "react";

import Hero from "../sections/hero";
import Blog from "../sections/blog";
import About from "../sections/about";

export const AboutPage = ({ sections }) => {
    const { hero, blog, about } = sections;
    return (
        <>
            <Hero data={hero} />
            <About data={about} />
            <Blog data={blog} />
        </>
    );
};

export default AboutPage;
