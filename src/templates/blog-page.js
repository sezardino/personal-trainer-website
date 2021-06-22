import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layouts/default";
import BlogTemplate from "../components/pages/Blog";

const BlogPage = ({ data }) => {
    const {
        markdownRemark: {
            frontmatter: { seo, sections },
        },
        allMarkdownRemark,
    } = data;

    return (
        <Layout seo={seo}>
            <BlogTemplate
                data={{
                    sections: sections,
                    posts: allMarkdownRemark.edges,
                }}
            />
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
        allMarkdownRemark(
            filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
            sort: { fields: frontmatter___date }
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        excerpt
                        thumbnail {
                            childImageSharp {
                                fluid(quality: 100, maxHeight: 290) {
                                    src
                                }
                            }
                        }
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }
`;

export { query };
export default BlogPage;
