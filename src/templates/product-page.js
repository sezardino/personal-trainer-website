import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import ProductsTemplate from "../components/pages/Products";

const ProductPage = ({ data }) => {
    const { seo, sections } = data.markdownRemark.frontmatter;

    return (
        <Layout seo={seo}>
            <ProductsTemplate sections={sections} />
        </Layout>
    );
};

const query = graphql`
    {
        markdownRemark(fileAbsolutePath: { regex: "/products.md/" }) {
            id
            frontmatter {
                seo {
                    description
                    name
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
                    blog {
                        label
                        title
                    }
                    hero {
                        description
                        title
                        image {
                            childImageSharp {
                                fluid(quality: 100) {
                                    src
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

export { query };
export default ProductPage;
