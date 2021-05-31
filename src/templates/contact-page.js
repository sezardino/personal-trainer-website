import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import ContactPage from "../components/pages/Contact";

const Contact = ({ data }) => {
    const seo = data.markdownRemark.frontmatter.seo;
    return (
        <Layout seo={seo}>
            <ContactPage />{" "}
        </Layout>
    );
};

const query = graphql`
    {
        markdownRemark(fileAbsolutePath: { regex: "/contact/" }) {
            frontmatter {
                seo {
                    description
                    title
                    image {
                        childImageSharp {
                            fluid(quality: 70, maxWidth: 150) {
                                src
                            }
                        }
                    }
                }
            }
        }
    }
`;

export { query };
export default Contact;
