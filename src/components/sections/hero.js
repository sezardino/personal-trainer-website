import React from "react";
import { stringFormatting } from "../../utils";
import Social from "../parts/social";

const getTitleTemplate = (title) => {
    const wordsArr = stringFormatting.split(title);
    return wordsArr.map((word) => {
        return (
            <span
                className={`hero__title-line ${
                    wordsArr.length === 1 ? "hero__title-line--one" : ""
                }`}
                key={word}
            >
                <span className="hero__title-frst">
                    {stringFormatting.getFirstLetters(word)}
                </span>
                {stringFormatting.deleteFirstLetters(word)}
            </span>
        );
    });
};

const Hero = ({ data, extraClass }) => {
    const { description, image, title } = data;
    let titleTemplate;
    if (extraClass === "home") {
        titleTemplate = (
            <h1 className="hero__title">
                {getTitleTemplate(title)}
                <span className="hero__title-line hero__title-line--last">
                    {description}
                </span>
            </h1>
        );
    } else if (extraClass === "post") {
        titleTemplate = (
            <>
                <h1 className="hero__title">{title}</h1>
                <p className="hero__title-line hero__title-line--last">
                    {description}
                </p>
            </>
        );
    } else {
        titleTemplate = (
            <>
                <h1 className="hero__title">{getTitleTemplate(title)}</h1>
                <p className="hero__title-line hero__title-line--last">
                    {description}
                </p>
            </>
        );
    }

    const gradient =
        "linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))";

    return (
        <section
            className={`hero${extraClass ? " hero--" + extraClass : ""}`}
            style={{
                backgroundImage: `${gradient}, url(${
                    !!image.childImageSharp
                        ? image.childImageSharp.fluid.src
                        : image.publicURL
                })`,
            }}
        >
            <div className="container hero__container">
                {titleTemplate}
                <div className="hero__social">
                    <Social extraClass="hero" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
