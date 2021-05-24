import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import ContactPage from "../components/pages/Contact";

const Contact = ({ data }) => {
    const fields = data.markdownRemark.frontmatter.contactData;
    return (
        <Layout>
            {" "}
            <ContactPage data={fields} />{" "}
        </Layout>
    );
};

const query = graphql`
    {
        markdownRemark(fileAbsolutePath: { regex: "/common-data.md/" }) {
            frontmatter {
                contactData {
                    mail
                    tel
                }
            }
        }
    }
`;

export { query };
export default Contact;
