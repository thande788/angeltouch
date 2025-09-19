import React from 'react';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import testimonialsImg from '../assets/testimonials/pexels-cottonbro-5493781.jpg';

const testimonials = [
  {
    name: 'Evelyn R.',
    text: 'Angel Touch provided my mother with the most caring and attentive support. Their team truly goes above and beyond! The personalized care plan made such a difference in her daily life.',
    relation: 'Daughter of client',
  },
  {
    name: 'Samuel P.',
    text: 'The caregivers are professional, friendly, and always on time. I have peace of mind knowing my father is in good hands. The communication with family is excellent.',
    relation: 'Son of client',
  },
  {
    name: 'Patricia L.',
    text: 'Their personalized care plans made all the difference for our family. The companion care has brought so much joy to my daily routine. Highly recommend Angel Touch!',
    relation: 'Client',
  },
  {
    name: 'Maria G.',
    text: 'After my surgery, Angel Touch helped me transition back to independence safely. The meal preparation and light housekeeping were exactly what I needed.',
    relation: 'Client',
  },
  {
    name: 'Robert K.',
    text: 'The transportation services have been a lifesaver for my medical appointments. The caregivers are patient, kind, and truly understand our needs.',
    relation: 'Client',
  },
];

const TestimonialsPage = () => (
  <main className="main-content" style={{ padding: '0 2rem 2rem 2rem' }} aria-label="Client Testimonials">
    <section style={{ textAlign: 'center', marginBottom: '3rem' }} aria-label="Testimonials Hero">
      <h1 style={{ marginBottom: '1rem', fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary-blue)' }}>Stories from Our Families</h1>
      <img 
        src={testimonialsImg} 
        alt="Gentle hands providing comfort and support, representing the trust and care between families and caregivers" 
        style={{ 
          width: '100%', 
          maxWidth: '500px', 
          borderRadius: '24px', 
          boxShadow: '0 4px 20px rgba(111, 168, 220, 0.15)',
          marginBottom: '2rem'
        }} 
        loading="lazy"
      />
      <p style={{ 
        fontSize: '1.2rem', 
        color: 'var(--text-muted)', 
        maxWidth: '600px', 
        margin: '0 auto',
        lineHeight: '1.6'
      }}>
        Hear from the families and clients who have experienced the compassionate care that makes Angel Touch special.
      </p>
    </section>
    <TestimonialsCarousel testimonials={testimonials} />
    <section style={{ 
      textAlign: 'center', 
      marginTop: '4rem',
      padding: '3rem 2rem',
      background: 'var(--primary-blue)',
      borderRadius: '24px',
      color: 'var(--text-light)'
    }} aria-label="Call to Action">
      <h2 style={{ color: 'var(--text-light)', marginBottom: '1rem' }}>Ready to Experience Compassionate Care?</h2>
      <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: 0.95, color: '#fff', textShadow: '0 1px 4px #2C7A7B55, 0 0 2px #2C7A7B22' }}>
        Join the families who trust Angel Touch for reliable, personalized home care services.
      </p>
      <a href="/contact" className="cta cta-gold">Schedule Your Free Consultation</a>
    </section>
  </main>
);

export default TestimonialsPage;
