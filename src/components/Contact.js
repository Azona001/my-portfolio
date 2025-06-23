import React, { useState } from 'react';
import { useForm } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("xblyzjbg"); 

  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formValues.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formValues.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formValues.message.trim()) {
      newErrors.message = 'Message is required';
    }

    return newErrors;
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for the field being updated
    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }));
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    handleSubmit(e); // Pass to Formspree only if validation passes
  };

  if (state.succeeded) {
    return <p className="success-message">Thanks for your message!</p>;
  }

  return (
    <section className="contact">
      <h2 id="contact">Contact</h2>
      <p>Feel free to reach out about opportunities or just to say hi!</p>

      <form id="contact-form" onSubmit={onFormSubmit} noValidate>
        <div className="contact-fields">
          <label htmlFor="name"></label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={formValues.name}
            onChange={onInputChange}
            required
            className={errors.name ? 'input error-border' : 'input'}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="contact-fields">
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            value={formValues.email}
            onChange={onInputChange}
            required
            className={errors.email ? 'input error-border' : 'input'}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="contact-fields">
          <label htmlFor="message"></label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            rows="5"
            cols="30"
            value={formValues.message}
            onChange={onInputChange}
            required
            className={errors.message ? 'input error-border' : 'input'}
          />
          {errors.message && <span className="error">{errors.message}</span>}
        </div>

        <div className="button">
          <button
            type="submit"
            className="submit"
            disabled={state.submitting}
          >
            Send
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
