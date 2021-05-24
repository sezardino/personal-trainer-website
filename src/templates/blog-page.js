import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

export const BlogPageTemplate = () => {
    return <p>blog</p>;
};

const BlogPage = ({ data }) => {
    const { seo } = data.markdownRemark.frontmatter;
    return (
        <Layout seo={seo}>
            <BlogPageTemplate />
        </Layout>
    );
};

export default BlogPage;

export const aboutPageQuery = graphql`
    query {
        markdownRemark(fileAbsolutePath: { regex: "/blog.md/" }) {
            html
            frontmatter {
                seo {
                    title
                    description
                    image {
                        publicURL
                    }
                }
            }
        }
    }
`;
