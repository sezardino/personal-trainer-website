import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/layouts/default";
import PostTemplate from "../components/pages/Post";

const BlogPost = ({ data }) => {
    const { seo } = data.markdownRemark.frontmatter;

    return (
        <Layout seo={seo}>
            <PostTemplate data={data} />
        </Layout>
    );
};

const query = graphql`
    query ($id: String) {
        markdownRemark(id: { eq: $id }) {
            frontmatter {
                seo {
                    description
                    title
                    image {
                        childrenImageSharp {
                            fluid(quality: 100) {
                                src
                            }
                        }
                    }
                }
                title
                excerpt
                date(formatString: "ll")
                hero {
                    description
                    title
                    titleFormat
                    image {
                        childImageSharp {
                            fluid(quality: 100) {
                                src
                            }
                        }
                    }
                }
                thumbnail {
                    childImageSharp {
                        fluid(quality: 100) {
                            src
                        }
                    }
                }
            }
            html
        }
    }
`;

export { query };
export default BlogPost;
