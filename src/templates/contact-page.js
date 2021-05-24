import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import ContactPage from "../components/pages/Contact";

const Contact = ({ data }) => {
    // const fields = data.markdownRemark.frontmatter.contactData;
    const seo = data.markdownRemark.frontmatter.seo;
    return (
        <Layout seo={seo}>
            <ContactPage />{" "}
        </Layout>
    );
};

const query = graphql`
    {
        markdownRemark(fileAbsolutePath: { regex: "/contact.md/" }) {
            frontmatter {
                seo {
                    description
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
export default Contact;
