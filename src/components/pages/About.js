import React from "react";

import Hero from "../sections/hero";
import Blog from "../sections/blog";

export const AboutPage = ({ sections }) => {
    const { hero, blog } = sections;
    return (
        <>
            <Hero data={hero} />
            <Blog data={blog} />
        </>
    );
};

export default AboutPage;
