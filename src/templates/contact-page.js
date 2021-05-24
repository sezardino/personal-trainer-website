import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import ContactForm from "../components/parts/contact-form";
import Social from "../components/parts/social";

const ContactPageTemplate = ({ data }) => {
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
                            Mail:
                            <a
                                href={`mailto:${data.mail}`}
                                className="contact__info"
                            >
                                {data.mail}
                            </a>
                        </p>
                        <p className="contact__field">
                            Telefon:
                            <a
                                href={`tel:${data.tel}`}
                                className="contact__info"
                            >
                                {data.tel}
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

export const ContactPage = ({ data }) => {
    const fields = data.markdownRemark.frontmatter.contactData;
    return (
        <Layout>
            <ContactPageTemplate data={fields} />
        </Layout>
    );
};

const query = graphql`
    {
        markdownRemark(fileAbsolutePath: { regex: "/common-data.md/" }) {
            frontmatter {
                contactData {
                    mail
                    tel
                }
            }
        }
    }
`;

export { query };
export default ContactPage;
