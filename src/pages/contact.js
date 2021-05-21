import { graphql } from "gatsby";
import React, { useState } from "react";
import Layout from "../components/Layout";

const encode = (data) => {
    return Object.keys(data)
        .map(
            (key) =>
                encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
};

const Contact = ({ data }) => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [formData, setFormData] = useState({});

    const fields = data.markdownRemark.frontmatter.contact;
    console.log(fields);

    const changeHandler = (evt) => {
        const target = evt.target;
        setFormData({ ...formData, [target.name]: target.value });
        console.log(formData);
    };

    const submitHandler = (evt) => {
        evt.preventDefault();
        const form = evt.target;
        setLoading(true);
        setSuccess(false);
        setError(false);
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
                "form-name": form.getAttribute("name"),
                ...formData,
            }),
        })
            .then(() => {
                setLoading(false);
                setSuccess(true);
            })
            .catch(() => {
                setError(true);
                setLoading(false);
            });
    };

    return (
        <Layout>
            <section className="contact container">
                <h1 className="contact__title">Contact</h1>
                <p className="contact__text">Contact with me</p>
                <div className="contact__wrapper">
                    <div className="contact__form">
                        <form
                        className="contact-form"
                            name="contact"
                            method="post"
                            action="/contact/thanks/"
                            data-netlify="true"
                            data-netlify-honeypot="bot-field"
                            onSubmit={submitHandler}
                        >
                            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                            <input
                                type="hidden"
                                name="form-name"
                                value="contact"
                            />
                            <div hidden>
                                <label>
                                    Don’t fill this out:{" "}
                                    <input name="bot-field" />
                                </label>
                            </div>
                            <div className="contact-form__field">
                                <label className="contact-form__label" htmlFor={"name"}>
                                    Your name
                                </label>
                                <div className="">
                                    <input
                                        className="contact-form__input input"
                                        type={"text"}
                                        name={"name"}
                                        onChange={changeHandler}
                                        id={"name"}
                                        required={true}
                                    />
                                </div>
                            </div>
                            <div className="contact-form__field">
                                <label className="contact-form__label" htmlFor={"email"}>
                                    Email
                                </label>
                                <div className="control">
                                    <input
                                        className="contact-form__input input"
                                        type={"email"}
                                        name={"email"}
                                        onChange={changeHandler}
                                        id={"email"}
                                        required={true}
                                    />
                                </div>
                            </div>
                            <div className="contact-form__field">
                                <label className="contact-form__label" htmlFor={"message"}>
                                    Message
                                </label>
                                <div className="control">
                                    <textarea
                                        className="contact-form__textarea textarea"
                                        name={"message"}
                                        onChange={changeHandler}
                                        id={"message"}
                                        required={true}
                                    />
                                </div>
                            </div>
                            <div className="contact-form__field">
                                <button
                                    className="button is-link"
                                    type="submit"
                                    disabled={loading && true}
                                >
                                    Send
                                </button>
                                {loading && <span>Sending</span>}
                                {success && <span>Success</span>}
                                {error && <span>Some Error</span>}
                            </div>
                        </form>
                    </div>
                    <div className="contact__data">
                        <div className="contact__contact-data">
                            <p className="contact__field">
                                mail:
                                <span>{fields.mail}</span>
                            </p>
                            <p className="contact__field">
                                phone:
                                <span>{fields.tel}</span>
                            </p>
                        </div>
                        <ul className="social">
                            {fields.social.map((item) => (
                                <li className="social__item">
                                    <a
                                        href={item.link}
                                        className="social__link"
                                    >
                                        <img
                                            className="social__link-icon"
                                            src={item.icon.publicURL}
                                            alt={item.name + " icon"}
                                        />
                                        <span className="hidden">
                                            {item.name}
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

const query = graphql`
    {
        markdownRemark(fileAbsolutePath: { regex: "/data.md/" }) {
            frontmatter {
                contact {
                    mail
                    tel
                    social {
                        link
                        name
                        icon {
                            publicURL
                        }
                    }
                }
            }
        }
    }
`;

export { query };
export default Contact;

{
    /* <section className="section">
                <div className="container">
                    <div className="content">
                        <h1>Contact</h1>
                        <form
                            name="contact"
                            method="post"
                            action="/contact/thanks/"
                            data-netlify="true"
                            data-netlify-honeypot="bot-field"
                            onSubmit={submitHandler}
                        >
                            {/* The `form-name` hidden field is required to support form submissions without JavaScript */
}
//                     <input
//                         type="hidden"
//                         name="form-name"
//                         value="contact"
//                     />
//                     <div hidden>
//                         <label>
//                             Don’t fill this out:{" "}
//                             <input name="bot-field" />
//                         </label>
//                     </div>
//                     <div className="field">
//                         <label className="label" htmlFor={"name"}>
//                             Your name
//                         </label>
//                         <div className="control">
//                             <input
//                                 className="input"
//                                 type={"text"}
//                                 name={"name"}
//                                 onChange={changeHandler}
//                                 id={"name"}
//                                 required={true}
//                             />
//                         </div>
//                     </div>
//                     <div className="field">
//                         <label className="label" htmlFor={"email"}>
//                             Email
//                         </label>
//                         <div className="control">
//                             <input
//                                 className="input"
//                                 type={"email"}
//                                 name={"email"}
//                                 onChange={changeHandler}
//                                 id={"email"}
//                                 required={true}
//                             />
//                         </div>
//                     </div>
//                     <div className="field">
//                         <label className="label" htmlFor={"message"}>
//                             Message
//                         </label>
//                         <div className="control">
//                             <textarea
//                                 className="textarea"
//                                 name={"message"}
//                                 onChange={changeHandler}
//                                 id={"message"}
//                                 required={true}
//                             />
//                         </div>
//                     </div>
//                     <div className="field">
//                         <button
//                             className="button is-link"
//                             type="submit"
//                             disabled={loading && true}
//                         >
//                             Send
//                         </button>
//                         {loading && <span>Sending</span>}
//                         {success && <span>Success</span>}
//                         {error && <span>Some Error</span>}
//                     </div>
//                 </form>
//             </div>
//         </div>
//     </section>
//  */}
