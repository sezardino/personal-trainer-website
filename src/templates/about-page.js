import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

export const AboutPageTemplate = () => {
    return <p>about page</p>;
};

const AboutPage = ({ data }) => {
    const seo = data.markdownRemark.frontmatter.seo;

    return (
        <Layout seo={seo}>
            <AboutPageTemplate />
        </Layout>
    );
};

const query = graphql`
    query MyQuery {
        markdownRemark(fileAbsolutePath: { regex: "/about.md/" }) {
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
export default AboutPage;
