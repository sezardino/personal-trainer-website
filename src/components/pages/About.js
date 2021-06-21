import React from "react";
import { Link } from "gatsby";

import Hero from "../sections/hero";

export const AboutPage = ({ sections, body }) => {
    const { hero } = sections;
    return (
        <>
            <Hero data={hero} />
            <section className="about-page">
                <h2 className="hidden">O mnie</h2>
                <div className="about-page__container container">
                    <div className="about-page__wrapper">
                        <div
                            dangerouslySetInnerHTML={{
                                __html: body,
                            }}
                        ></div>
                        <Link
                            to="/contact"
                            className="button button--primary about-page__button"
                        >
                            skontaktuj się ze mną
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutPage;
