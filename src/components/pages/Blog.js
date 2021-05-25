import React from "react";

import Hero from "../sections/hero";

export const BlogPage = ({ sections }) => {
    const { hero } = sections;
    return (
        <>
            <Hero data={hero} />
        </>
    );
};

export default BlogPage;
