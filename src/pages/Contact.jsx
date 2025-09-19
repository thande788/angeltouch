import React, { useState } from 'react';
import contactImg from '../assets/contact/pexels-ron-lach-8691830.jpg';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required.';
    if (!form.email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) newErrors.email = 'Valid email required.';
    if (form.phone && !form.phone.match(/^[0-9\-\+\s\(\)]{7,}$/)) newErrors.phone = 'Enter a valid phone number.';
    if (!form.message.trim()) newErrors.message = 'Message is required.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSubmitted(true);
  };

  return (
    <main className={styles.contactContainer} aria-label="Contact Angel Touch Homecare Services">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ marginBottom: '1rem', fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary-blue)' }}>Get In Touch</h1>
        <img 
          src={contactImg} 
          alt="Professional caregiver listening attentively during a consultation, symbolizing open communication and care" 
          style={{ 
            width: '100%', 
            maxWidth: '500px', 
            borderRadius: '24px', 
            boxShadow: '0 4px 20px rgba(111, 168, 220, 0.15)',
            marginBottom: '2rem'
          }} 
          loading="lazy"
        />
      </div>
      <div className={styles.contactGrid}>
        <section className={styles.formSection} aria-labelledby="contact-form-title">
          <h2 id="contact-form-title">Book Your Free Consultation</h2>
          {submitted ? (
            <div className={styles.successMsg} role="status" aria-live="polite">
              <h3>Thank you for reaching out!</h3>
              <p>We will contact you within 24 hours to schedule your complimentary consultation.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.contactForm} aria-label="Contact Intake Form" noValidate>
              <label htmlFor="name">Name*</label>
              <input
                id="name"
                name="name"
                type="text"
                className={styles.input}
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                aria-required="true"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && <span id="name-error" style={{ color: 'var(--primary-pink)', fontSize: '0.98rem' }}>{errors.name}</span>}

              <label htmlFor="email">Email*</label>
              <input
                id="email"
                name="email"
                type="email"
                className={styles.input}
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                aria-required="true"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && <span id="email-error" style={{ color: 'var(--primary-pink)', fontSize: '0.98rem' }}>{errors.email}</span>}

              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className={styles.input}
                placeholder="Your Phone"
                value={form.phone}
                onChange={handleChange}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
              />
              {errors.phone && <span id="phone-error" style={{ color: 'var(--primary-pink)', fontSize: '0.98rem' }}>{errors.phone}</span>}

              <label htmlFor="message">Message*</label>
              <textarea
                id="message"
                name="message"
                className={styles.textarea}
                placeholder="How can we help you today?"
                value={form.message}
                onChange={handleChange}
                rows={4}
                required
                aria-required="true"
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && <span id="message-error" style={{ color: 'var(--primary-pink)', fontSize: '0.98rem' }}>{errors.message}</span>}

              <button type="submit" className={styles.ctaBtn} aria-label="Submit contact form">
                Submit Request
              </button>
            </form>
          )}
        </section>
        <section className={styles.infoSection} aria-labelledby="contact-info-title">
          <h2 id="contact-info-title">Contact Information</h2>
          <div style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            <div style={{ marginBottom: '1rem' }}>
              <strong style={{ color: 'var(--primary-blue)' }}>Phone:</strong><br />
              <a href="tel:9785551234" style={{ fontSize: '1.2rem', fontWeight: '600', color: 'var(--primary-blue)' }}>(978) 555-1234</a>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <strong style={{ color: 'var(--primary-blue)' }}>Email:</strong><br />
              <a href="mailto:info@angeltouch.com" style={{ fontSize: '1.1rem', color: 'var(--primary-blue)' }}>info@angeltouch.com</a>
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <strong style={{ color: 'var(--primary-blue)' }}>Service Area:</strong><br />
              Lowell, MA & Surrounding Communities<br />
              <span style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                Including Dracut, Chelmsford, Tewksbury, and Billerica
              </span>
            </div>
            <div style={{ 
              background: 'var(--gray-bg)', 
              padding: '1.5rem', 
              borderRadius: '12px',
              textAlign: 'center',
              marginTop: '2rem'
            }}>
              <h3 style={{ color: 'var(--primary-blue)', margin: '0 0 0.5rem 0' }}>Available 24/7</h3>
              <p style={{ margin: 0, color: 'var(--text-muted)' }}>
                Emergency support and consultations
              </p>
            </div>
          </div>
        </section>
      </div>
      {/* Map embed and FAQ accordion below */}
      <section style={{
        margin: '3rem auto 0 auto',
        maxWidth: 700,
        background: 'var(--white)',
        borderRadius: 16,
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
        padding: '2rem',
        textAlign: 'center',
      }} aria-label="Our Location">
        <h2 style={{ color: 'var(--primary-blue)', marginBottom: '1rem' }}>Our Location</h2>
        <iframe
          title="Angel Touch Homecare Services Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.073282073839!2d-71.3161716845436!3d42.6334247791687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3a6c7e2e2e2e3%3A0x7e2e2e2e2e2e2e2e!2sLowell%2C%20MA!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
          width="100%"
          height="300"
          style={{ border: 0, borderRadius: 12 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
      <section style={{
        margin: '2.5rem auto 0 auto',
        maxWidth: 700,
        background: 'var(--white)',
        borderRadius: 16,
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
        padding: '2rem',
      }} aria-label="Frequently Asked Questions">
        <h2 style={{ color: 'var(--primary-blue)', marginBottom: '1.2rem' }}>Frequently Asked Questions</h2>
        <details style={{ marginBottom: '1rem' }}>
          <summary style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--primary-blue)', cursor: 'pointer' }}>What areas do you serve?</summary>
          <div style={{ marginTop: '0.7rem', color: 'var(--primary-blue)' }}>We serve Lowell, Dracut, Chelmsford, Tewksbury, Billerica, and nearby towns throughout the Greater Lowell area.</div>
        </details>
        <details style={{ marginBottom: '1rem' }}>
          <summary style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--primary-blue)', cursor: 'pointer' }}>Are your caregivers certified?</summary>
          <div style={{ marginTop: '0.7rem', color: 'var(--primary-blue)' }}>Yes, all caregivers are experienced, certified, and undergo comprehensive background checks, CORI screening, and ongoing training to maintain the highest standards of care.</div>
        </details>
        <details style={{ marginBottom: '1rem' }}>
          <summary style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--primary-blue)', cursor: 'pointer' }}>How do I get started with services?</summary>
          <div style={{ marginTop: '0.7rem', color: 'var(--primary-blue)' }}>Contact us via our online form or phone to schedule a complimentary consultation. We'll conduct a comprehensive assessment and create a personalized care plan tailored to your specific needs.</div>
        </details>
        <details style={{ marginBottom: '1rem' }}>
          <summary style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--primary-blue)', cursor: 'pointer' }}>What payment options are available?</summary>
          <div style={{ marginTop: '0.7rem', color: 'var(--primary-blue)' }}>We accept private pay, long-term care insurance, and some Medicaid programs. We'll work with you to find the most suitable payment option for your situation.</div>
        </details>
        <details style={{ marginBottom: '1rem' }}>
          <summary style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--primary-blue)', cursor: 'pointer' }}>Can I choose my caregiver?</summary>
          <div style={{ marginTop: '0.7rem', color: 'var(--primary-blue)' }}>Absolutely! We strive for consistent caregiver assignments and carefully match clients with caregivers who best fit their personality, needs, and preferences.</div>
        </details>
        <details style={{ marginBottom: '1rem' }}>
          <summary style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--primary-blue)', cursor: 'pointer' }}>Is my information kept confidential?</summary>
          <div style={{ marginTop: '0.7rem', color: 'var(--primary-blue)' }}>Yes, we are fully HIPAA-compliant and prioritize client privacy and data security. All personal and medical information is kept strictly confidential.</div>
        </details>
        <details style={{ marginBottom: '1rem' }}>
          <summary style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--primary-blue)', cursor: 'pointer' }}>Do you provide 24-hour care?</summary>
          <div style={{ marginTop: '0.7rem', color: 'var(--primary-blue)' }}>We offer flexible scheduling including hourly, daily, and extended care options. While we currently focus on scheduled visits, we're expanding to offer 24-hour live-in care.</div>
        </details>
        <details style={{ marginBottom: '1rem' }}>
          <summary style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--primary-blue)', cursor: 'pointer' }}>What if I'm not satisfied with the service?</summary>
          <div style={{ marginTop: '0.7rem', color: 'var(--primary-blue)' }}>Your satisfaction is our priority. We offer ongoing communication and will adjust care plans or reassign caregivers as needed to ensure you receive the best possible care.</div>
        </details>
      </section>
    </main>
  );
};

export default Contact;
