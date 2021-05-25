import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/Layout";

const NotFoundPage = ({ data }) => {
    const seo = data.markdownRemark.frontmatter.seo;
    return (
        <Layout seo={seo}>
            <div>
                <h1>NOT FOUND</h1>
                <p>
                    You just hit a route that doesn&#39;t exist... the sadness.
                </p>
            </div>
        </Layout>
    );
};

const query = graphql`
    query {
        markdownRemark(fileAbsolutePath: { regex: "/404.md/" }) {
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
export default NotFoundPage;
