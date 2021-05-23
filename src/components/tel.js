import { graphql, useStaticQuery } from "gatsby";
import React from "react";

const query = graphql`
  query {
    markdownRemark(fileAbsolutePath: { regex: "/data.md/" }) {
      frontmatter {
        contact {
          tel
        }
      }
    }
  }
`;

const Tel = () => {
  const data = useStaticQuery(query);

  return (
    <p className="nav__contact">
      <span className="nav__contact-text">Warszawa </span>
      <a
        href={`tel:${data.markdownRemark.frontmatter.contact.tel}`}
        className="nav__contact-link"
      >
        {data.markdownRemark.frontmatter.contact.tel}
      </a>
    </p>
  );
};

export default Tel;
