import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";

const query = graphql`
    query {
        markdownRemark(fileAbsolutePath: { regex: "/common-data.md/" }) {
            frontmatter {
                logo {
                    publicURL
                }
            }
        }
    }
`;

const Logo = () => {
    const data = useStaticQuery(query);
    return (
        <Link to="/" className="logo" title="Logo">
            <img
                src={data.markdownRemark.frontmatter.logo.publicURL}
                alt="logo"
            />
        </Link>
    );
};

export default Logo;
