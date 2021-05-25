import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

export const ProductPageTemplate = () => {
    return <p>product page</p>;
};

const ProductPage = ({ data }) => {
    const seo = data.markdownRemark.frontmatter.seo;

    return (
        <Layout seo={seo}>
            <ProductPageTemplate />
        </Layout>
    );
};

const query = graphql`
    query {
        markdownRemark(fileAbsolutePath: { regex: "/products.md/" }) {
            id
            frontmatter {
                seo {
                    description
                    name
                    title
                    image {
                        publicURL
                    }
                }
            }
        }
    }
`;

export { query };
export default ProductPage;
