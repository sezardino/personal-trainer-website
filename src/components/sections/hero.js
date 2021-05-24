import React from "react";
import { stringFormatting } from "../../utils";
import Social from "../parts/social";

const getTitleTemplate = (title) =>
    stringFormatting.split(title).map((word) => {
        return (
            <span className="hero__title-line" key={word}>
                <span className="hero__title-frst">
                    {stringFormatting.getFirstLetters(word)}
                </span>
                {stringFormatting.deleteFirstLetters(word)}
            </span>
        );
    });

const Hero = ({ data }) => {
    const { description, image, title } = data;

    return (
        <section
            className="hero"
            style={{
                backgroundImage: `url(${
                    !!image.childImageSharp
                        ? image.childImageSharp.fluid.src
                        : image.publicURL
                })`,
            }}
        >
            <div className="container hero__container">
                <h1 className="hero__title">
                    {getTitleTemplate(title)}
                    <span className="hero__title-line hero__title-line--last">
                        {description}
                    </span>
                </h1>
                <div className="hero__social">
                    <Social extraClass="hero" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
