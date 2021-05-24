import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import HomePage from "../components/pages/Home";

const IndexPage = ({ data }) => {
    const { sections, seo } = data.markdownRemark.frontmatter;

    return (
        <Layout seo={seo}>
            <HomePage sections={sections} />
        </Layout>
    );
};

const query = graphql`
    query {
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

export { query };
export default IndexPage;
