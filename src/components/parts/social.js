import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";

import instagram from "../../assets/img/inst.svg";
import facebook from "../../assets/img/f.svg";
import vk from "../../assets/img/vk.svg";

const SOCIAL_ICONS = {
    instagram,
    facebook,
    vk,
};

const query = graphql`
    {
        markdownRemark(fileAbsolutePath: { regex: "/common-data.md/" }) {
            frontmatter {
                contactData {
                    facebook
                    instagram
                    vk
                }
            }
        }
    }
`;

const Social = ({ extraClass }) => {
    const data = useStaticQuery(query);
    const contactData = data.markdownRemark.frontmatter.contactData;
    const social = Object.entries(contactData);
    return (
        <div className={`social ${extraClass && "social--" + extraClass}`}>
            <ul className="social__list">
                {social.map(([name, link], index) => (
                    <li className="social__item" key={name + index}>
                        <Link
                            href={link}
                            className="social__link"
                            target="blank"
                        >
                            <img
                                className="social__link-icon"
                                src={SOCIAL_ICONS[name]}
                                alt={name + " icon"}
                            />
                            <span className="hidden">{name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Social;
