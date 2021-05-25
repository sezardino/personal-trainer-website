import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import BlogTemplate from "../components/pages/Blog";

const BlogPage = ({ data }) => {
    const { seo, sections } = data.markdownRemark.frontmatter;
    return (
        <Layout seo={seo}>
            <BlogTemplate sections={sections} />
        </Layout>
    );
};

const query = graphql`
    {
        markdownRemark(frontmatter: { templateKey: { eq: "blog-page" } }) {
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
                }
            }
        }
    }
`;

export { query };
export default BlogPage;
