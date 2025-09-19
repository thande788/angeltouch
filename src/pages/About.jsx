import React from 'react';
import styles from '../styles/About.module.css';
import aboutImg from '../assets/about/pexels-edmond-dantes-4342498.jpg';

// Accessible About page with modern two-column layout, badges, and responsive design
const credentials = [
  'Registered Home Care Agency (MA Executive Office of Health and Human Services)',
  'Liability insurance & worker’s compensation',
  'HIPAA compliance for client data privacy',
  'Staff CORI checks & verified caregiver qualifications',
  '10+ years caregiving experience',
  'Small Business Administration certificate',
];

const About = () => (
  <main className={styles.aboutContainer} aria-label="About Angel Touch Homecare Services">
    <h1 style={{ textAlign: 'center', marginBottom: '2.5rem' }}>About Angel Touch Homecare Services</h1>
    <div className={styles.aboutGrid}>
      {/* Founder portrait and badges */}
      <aside className={styles.portraitSection} aria-label="Founder and Credentials">
        <img
          src={aboutImg}
          alt="Portrait of Angel Touch Homecare Services founder, a compassionate caregiver"
          className={styles.portraitImg}
          loading="lazy"
        />
        <h2 style={{ marginBottom: '0.5rem', color: 'var(--primary-blue)' }}>Founder & Credentials</h2>
        <ul style={{ display: 'none' }} aria-hidden="true">
          {credentials.map((cred, i) => <li key={i}>{cred}</li>)}
        </ul>
        <div className={styles.badges}>
          {credentials.map((cred, i) => (
            <span className={styles.badge} key={i}>{cred}</span>
          ))}
        </div>
      </aside>

      {/* Mission and story */}
      <section className={styles.textSection} aria-label="Our Mission and Story">
        <h2>Our Mission</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
          To provide compassionate, reliable, and personalized non-medical in-home care services that enhance the quality of life for seniors and individuals with disabilities in Lowell, Massachusetts and surrounding communities.
        </p>
        <h2 style={{ marginTop: '2rem' }}>Our Story</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
          Angel Touch Homecare Services was founded by a certified home health aide with over a decade of hands-on caregiving experience and a background in healthcare management. Inspired by a passion for dignity, independence, and holistic support, our founder built Angel Touch to deliver the highest standards of care with warmth and professionalism.
        </p>
      </section>
    </div>

    {/* Legal structure and service area */}
    <section className={styles.legalSection} aria-label="Legal Structure and Service Area">
      <h2 style={{ color: 'var(--primary-blue)' }}>Legal Structure & Service Area</h2>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
        We are a Limited Liability Company (LLC) headquartered in Lowell, MA, serving Lowell and nearby towns: Dracut, Chelmsford, Tewksbury, and Billerica.
      </p>
    </section>
  </main>
);

export default About;
