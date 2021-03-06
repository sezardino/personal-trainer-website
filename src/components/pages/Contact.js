import React from "react";
import useCommon from "../hooks/useCommon";

import ContactForm from "../parts/contact-form";
import Social from "../parts/social";

const ContactPage = () => {
    const data = useCommon();
    return (
        <section className="contact">
            <div className="container contact__container">
                <div className="contact__wrapper">
                    <h1 className="contact__title">Kontakt</h1>
                    <p className="contact__text">
                        Skontaktuj się ze mna i coś tam jeszcze będzie napisane
                        jeszcze będzie napisane jeszcze będzie napisane.
                    </p>
                    <div className="contact__form">
                        <ContactForm />
                    </div>
                </div>
                <div className="contact__data">
                    <div className="contact__contact-data">
                        <p className="contact__field">
                            tel:
                            <a
                                href={`tel:${data.tel}`}
                                className="contact__info"
                            >
                                {data.tel}
                            </a>
                        </p>
                        <p className="contact__field">
                            e-mail:
                            <a
                                href={`mailto:${data.mail}`}
                                className="contact__info"
                            >
                                {data.mail}
                            </a>
                        </p>
                    </div>
                    <div className="contact__social">
                        <Social />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;
