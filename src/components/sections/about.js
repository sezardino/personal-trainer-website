import { Link } from "gatsby";
import React from "react";
import Img from "gatsby-image";

const About = ({ data }) => {
    const { description, image, label, title, descriptionList } = data;
    return (
        <section className="about">
            <div className="container about__container">
                <div className="about__description">
                    <h2 className="about__title">{title}</h2>
                    <p className="about__text">{description}</p>
                    <ul className="about__description-list">
                        {descriptionList.map((item) => (
                            <li className="about__description-item" key={item}>
                                {item}
                            </li>
                        ))}
                    </ul>
                    <Link
                        to="/about"
                        className="button button--primary about__button"
                    >
                        {label}
                    </Link>
                </div>
                <img
                    src={image.childImageSharp.fluid.src}
                    alt="to ja"
                    className="about__image-wrapper"
                />
            </div>
        </section>
    );
};

export default About;
