import React from "react";

import Hero from "../sections/hero";
import About from "../sections/about";
import Services from "../sections/services";
import Blog from "../sections/blog";

export const HomePage = ({ sections }) => {
    const {
        homeHero: hero,
        homeAbout: about,
        homeServices: services,
        homeBlog: blog,
    } = sections;
    return (
        <>
            <Hero data={hero} />
            <About data={about} />
            <Services data={services} />
            <Blog data={blog} />
        </>
    );
};

export default HomePage;
