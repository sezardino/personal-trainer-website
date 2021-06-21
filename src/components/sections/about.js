import { Link } from "gatsby";
import React from "react";

const About = ({ data }) => {
    const { description, image, button, title } = data;
    return (
        <section className="about">
            <div className="container about__container">
                <img
                    src={image.childImageSharp.fluid.src}
                    alt="to ja"
                    className="about__image-wrapper"
                />
                <div className="about__description">
                    <h2 className="about__title">{title}</h2>
                    <p className="about__text">{description}</p>
                    <Link
                        to={button.link}
                        className="button button--primary about__button"
                    >
                        {button.label}
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default About;
