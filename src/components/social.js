import { graphql, useStaticQuery } from "gatsby";
import React from "react";

const query = graphql`
  {
    markdownRemark(fileAbsolutePath: { regex: "/data.md/" }) {
      frontmatter {
        contact {
          social {
            link
            name
            icon {
              publicURL
            }
          }
        }
      }
    }
  }
`;

const Social = ({ extraClass }) => {
  const data = useStaticQuery(query);
  const fields = data.markdownRemark.frontmatter.contact;
  return (
    <div className={`social ${extraClass && "social--" + extraClass}`}>
      <ul className="social__list">
        {fields.social.map((item) => (
          <li className="social__item" key={item.name}>
            <a href={item.link} className="social__link">
              <img
                className="social__link-icon"
                src={item.icon.publicURL}
                alt={item.name + " icon"}
              />
              <span className="hidden">{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Social;
