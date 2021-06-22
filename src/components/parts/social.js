import { graphql, useStaticQuery } from "gatsby";
import React from "react";

import instagram from "../../assets/img/instagram.svg";
import facebook from "../../assets/img/facebook.svg";
import vk from "../../assets/img/vk.svg";
import whatsapp from "../../assets/img/whatsapp.svg";

const SOCIAL_ICONS = {
    instagram,
    facebook,
    vk,
    whatsapp,
};

const query = graphql`
    {
        markdownRemark(fileAbsolutePath: { regex: "/common/" }) {
            frontmatter {
                contactData {
                    facebook
                    instagram
                    vk
                    whatsapp
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
                        <a href={link} className="social__link" target="blank">
                            <img
                                className="social__link-icon"
                                src={SOCIAL_ICONS[name]}
                                alt={name + " icon"}
                            />
                            <span className="hidden">{name}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Social;
