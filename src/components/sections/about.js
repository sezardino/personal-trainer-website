import { Link } from "gatsby";
import React from "react";
import { stringFormatting } from "../../utils";

const About = ({ data }) => {
    const { desc, image, button, title } = data;

    return (
        <section className="about">
            <div className="container about__container">
                <img
                    src={image.childImageSharp.fluid.src}
                    alt="to ja"
                    className="about__image-wrapper"
                />
                <div className="about__description">
                    <h2 className="about__title">
                        {stringFormatting.getFirstWord(title)}{" "}
                    <span className="about__title-second">
                        {stringFormatting.getLastWord(title)}
                    </span>
                        </h2>
                    <div className="about__text typography">
                    {desc.map((item) =>
                    <p key={item}>{item}</p>
                    )}
                    </div>
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
