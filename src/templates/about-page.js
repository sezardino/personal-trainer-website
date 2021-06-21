import React from "react";
import { graphql } from "gatsby";
import AboutTemplate from "../components/pages/About";
import Layout from "../components/layouts/default";

const AboutPage = ({ data }) => {
    const { seo, sections } = data.markdownRemark.frontmatter;
    const body = data.markdownRemark.html

    return (
        <Layout seo={seo}>
            <AboutTemplate sections={sections} body={body} />
        </Layout>
    );
};

const query = graphql`
    query {
        markdownRemark(fileAbsolutePath: { regex: "/about/" }) {
            html
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
                }
            }
        }
    }
`;

export { query };
export default AboutPage;
