import React, { useState, useEffect } from 'react';
import { useForm } from '@formspree/react';
import { MdLocationOn } from 'react-icons/md';
import { FiMail } from 'react-icons/fi';
import './css/Toast.css';
import './css/Contact.css';

const Toast = ({ message, onClose }) => {
  useEffect(() => {
    const t = setTimeout(onClose, 4000);
    return () => clearTimeout(t);
  }, [onClose]);

  return (
    <div className="toast" role="status" aria-live="polite">
      <span>✓</span> {message}
    </div>
  );
};

const Contact = () => {
  const [state, handleSubmit] = useForm(process.env.REACT_APP_FORMSPREE_ID);
  const [showToast, setShowToast] = useState(false);

  const [formValues, setFormValues] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (state.succeeded) {
      setShowToast(true);
      setFormValues({ name: '', email: '', message: '' });
    }
  }, [state.succeeded]);

  const validate = () => {
    const newErrors = {};
    if (!formValues.name.trim()) newErrors.name = 'Name is required';
    if (!formValues.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formValues.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    handleSubmit(e);
  };

  return (
    <section className="contact">
      {showToast && (
        <Toast
          message="Thanks for your message! I'll get back to you soon."
          onClose={() => setShowToast(false)}
        />
      )}

      <div className="contact-header">
        <span className="availability-badge">
          <span className="availability-dot" />
          Open to opportunities
        </span>
        <h2 id="contact">Let's Work Together</h2>
        <p className="contact-intro">
          I'm currently looking for frontend and full-stack roles. Whether it's a job, a freelance project, or just a conversation — my inbox is open.
        </p>
        <div className="contact-meta">
          <span><MdLocationOn /> Los Angeles, CA</span>
          <span><FiMail /> isagbaazona@gmail.com</span>
        </div>
      </div>

      <form id="contact-form" onSubmit={onFormSubmit} noValidate>
        <div className="contact-fields">
          <label htmlFor="name">Name</label>
          <input
            type="text" id="name" name="name" placeholder="Your Name"
            value={formValues.name} onChange={onInputChange} required
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={errors.name ? 'input error-border' : 'input'}
          />
          {errors.name && <span id="name-error" className="error" role="alert">{errors.name}</span>}
        </div>

        <div className="contact-fields">
          <label htmlFor="email">Email</label>
          <input
            type="email" id="email" name="email" placeholder="Your Email"
            value={formValues.email} onChange={onInputChange} required
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={errors.email ? 'input error-border' : 'input'}
          />
          {errors.email && <span id="email-error" className="error" role="alert">{errors.email}</span>}
        </div>

        <div className="contact-fields">
          <label htmlFor="message">Message</label>
          <textarea
            id="message" name="message" placeholder="Your Message"
            rows="5" value={formValues.message} onChange={onInputChange} required
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'message-error' : undefined}
            className={errors.message ? 'input error-border' : 'input'}
          />
          {errors.message && <span id="message-error" className="error" role="alert">{errors.message}</span>}
        </div>

        <div className="button">
          <button type="submit" className="submit" disabled={state.submitting}>
            {state.submitting ? 'Sending…' : 'Send Message'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
