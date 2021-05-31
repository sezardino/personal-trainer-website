import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import AboutTemplate from "../components/pages/About";

const AboutPage = ({ data }) => {
    const { seo, sections } = data.markdownRemark.frontmatter;

    return (
        <Layout seo={seo}>
            <AboutTemplate sections={sections} />
        </Layout>
    );
};

const query = graphql`
    query {
        markdownRemark(fileAbsolutePath: { regex: "/about/" }) {
            frontmatter {
                seo {
                    description
                    title
                    image {
                        childImageSharp {
                            fluid(quality: 70, maxWidth: 150) {
                                src
                            }
                        }
                    }
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
export default AboutPage;
