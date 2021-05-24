import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";

import Hero from "../components/hero";
import About from "../components/about";
import Services from "../components/services";
import Blog from "../components/blog";

export const IndexPageTemplate = ({ sections }) => {
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

const IndexPage = ({ data }) => {
    const { sections, seo } = data.markdownRemark.frontmatter;

    return (
        <Layout seo={seo}>
            <IndexPageTemplate sections={sections} />
        </Layout>
    );
};

export default IndexPage;

export const pageQuery = graphql`
    query IndexPageTemplate {
        markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
            frontmatter {
                seo {
                    description
                    image {
                        publicURL
                    }
                    title
                }
                sections {
                    homeHero {
                        description
                        image {
                            publicURL
                        }
                        title
                    }
                    homeAbout {
                        description
                        image {
                            childImageSharp {
                                fluid {
                                    src
                                }
                            }
                        }
                        label
                        title
                    }
                    homeServices {
                        list {
                            description
                            image {
                                publicURL
                            }
                            name
                        }
                        title
                    }
                    homeBlog {
                        label
                        title
                    }
                }
            }
        }
    }
`;
