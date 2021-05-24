import { graphql, useStaticQuery } from "gatsby";
import React from "react";

const query = graphql`
    {
        markdownRemark(fileAbsolutePath: { regex: "/common-data.md/" }) {
            frontmatter {
                contactData {
                    tel
                }
            }
        }
    }
`;

const Tel = () => {
    const data = useStaticQuery(query);
    const tel = data.markdownRemark.frontmatter.contactData.tel;
    return (
        <p className="nav__contact">
            <span className="nav__contact-text">Warszawa </span>
            <a href={`tel:${tel}`} className="nav__contact-link">
                {tel}
            </a>
        </p>
    );
};

export default Tel;
