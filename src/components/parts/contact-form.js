import React, { useState } from "react";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({});

  const changeHandler = (evt) => {
    const target = evt.target;
    setFormData({ ...formData, [target.name]: target.value });
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
      <input type="hidden" name="form-name" value="contact" />
      <div hidden>
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </div>
      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor={"name"}>
          Imię
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
        <label className="contact-form__label" htmlFor={"contactData"}>
          e-mail/telefon
        </label>
        <div className="control">
          <input
            className="contact-form__input input"
            type={"text"}
            name={"contactData"}
            onChange={changeHandler}
            id={"contactData"}
            required={true}
          />
        </div>
      </div>
      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor={"message"}>
          Wiadomość
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
      <button
        className="button button--primary contact-form__button"
        type="submit"
        disabled={loading && true}
      >
        Send
      </button>
      {loading && <span>Sending</span>}
      {success && <span>Success</span>}
      {error && <span>Some Error</span>}
    </form>
  );
};

export default ContactForm;
