import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";

const query = graphql`
  query MyQuery {
    markdownRemark(fileAbsolutePath: { regex: "/data.md/" }) {
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
        alt="logotype"
      />
    </Link>
  );
};

export default Logo;
