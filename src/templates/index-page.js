import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layouts/default";
import HomePage from "../components/pages/Home";

const IndexPage = ({ data }) => {
    const { sections, seo } = data.markdownRemark.frontmatter;
    return (
        <Layout seo={seo} isHome={true}>
            <HomePage sections={sections} />
        </Layout>
    );
};

const query = graphql`
    {
        markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
            frontmatter {
                seo {
                    description
                    image {
                        childImageSharp {
                            fluid(quality: 70, maxWidth: 150) {
                                src
                            }
                        }
                    }
                    title
                }
                sections {
                    hero {
                        description
                        image {
                            childImageSharp {
                                fluid(quality: 100) {
                                    src
                                }
                            }
                        }
                        title
                    }
                    about {
                        description
                        descriptionList
                        button {
                            label
                            link
                        }
                        image {
                            childImageSharp {
                                fluid(quality: 100) {
                                    src
                                }
                            }
                        }
                        label
                        title
                    }
                    services {
                        list {
                            description
                            image {
                                publicURL
                            }
                            name
                        }
                        title
                    }
                    blog {
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
