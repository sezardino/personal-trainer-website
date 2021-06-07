import React from "react";
import { stringFormatting } from "../../utils";
import Social from "../parts/social";

const getTitleTemplate = (title) =>{
const wordsArr  = stringFormatting.split(title)
    return wordsArr.map((word) => {
        return (
            <span className={`hero__title-line ${wordsArr.length === 1 ? 'hero__title-line--one': ''}`} key={word}>
                <span className="hero__title-frst">
                    {stringFormatting.getFirstLetters(word)}
                </span>
                {stringFormatting.deleteFirstLetters(word)}
            </span>
        );
    })};

const Hero = ({ data, isHome }) => {
    const { description, image, title } = data;
    let titleTemplate;

    if (data.titleFormat) {
        titleTemplate =
            data.titleFormat === "breaking" ? getTitleTemplate(title) : title;
    } else {
        titleTemplate = getTitleTemplate(title);
    }

    return (
        <section
            className={`hero${isHome ? ' hero--home' : ''}`}
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
                    {titleTemplate}
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
