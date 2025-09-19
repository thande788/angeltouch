import React from 'react';
import '../styles/global.css';

const Home = () => (
  <main className="main-content home-hero" style={{ paddingTop: 0 }}>
    <section className="hero-section" style={{ marginTop: 0, borderRadius: '0 0 2.5rem 2.5rem', boxShadow: 'none', background: `url(https://images.pexels.com/photos/7345465/pexels-photo-7345465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1) center/cover no-repeat, #2991fd` }}>
      <div className="hero-overlay" aria-hidden="true" style={{ background: 'linear-gradient(90deg, rgba(41,145,253,0.82) 60%, rgba(44,122,123,0.45) 100%)' }}></div>
      <div className="hero-content" style={{ color: '#fff' }}>
        <h1 className="tagline" style={{ color: '#fff' }}>
          Compassion in Every Touch
        </h1>
        <p className="hero-desc" style={{ color: '#e6fffa' }}>
          Providing compassionate, reliable, and personalized in-home care for seniors and individuals with disabilities in Lowell, MA and surrounding communities.
        </p>
        <a 
          href="/contact" 
          className="button cta hero-cta" 
          aria-label="Book a Free Consultation"
          style={{ background: '#F6E05E', color: '#2991fd' }}
        >
          Book a Free Consultation
        </a>
      </div>
    </section>
    <section style={{ width: '100%', background: '#fff', borderRadius: 32, boxShadow: '0 2px 16px rgba(41,145,253,0.06)', padding: '2.5rem 0', margin: '3rem 0' }}>
      <h2 style={{ color: '#2991fd', fontSize: '2rem', marginBottom: '1rem', textAlign: 'center' }}>Welcome to Angel Touch Homecare Services</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'flex-start', gap: '2rem', width: '100%' }}>
        <div style={{ flex: 2, minWidth: 320, paddingLeft: '5vw', paddingRight: '2vw' }}>
          <p style={{ fontSize: '1.1rem', color: '#1A202C' }}>
            Our mission is to enhance quality of life through deeply personalized care plans, delivered by experienced and certified caregivers. We use advanced client management software for seamless communication, scheduling, and care coordination.
          </p>
          <p style={{ fontWeight: 600, color: '#1760a0' }}>
            <strong>Why Choose Us?</strong> Custom care plans, consistent caregiver assignments, strong local ties, and transparent pricing set us apart.
          </p>
        </div>
        <div style={{ flex: 1, minWidth: 280, display: 'flex', justifyContent: 'center', alignItems: 'center', paddingRight: '5vw' }}>
          <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80" alt="Caregiver helping senior at home" style={{ width: '100%', maxWidth: 320, borderRadius: 24, boxShadow: '0 2px 16px rgba(41,145,253,0.10)' }} loading="lazy" />
        </div>
      </div>
    </section>
    <section style={{ textAlign: 'center', margin: '3rem 0', width: '100%' }}>
      <h3 style={{ fontSize: '1.7rem', color: '#2991fd' }}>Ready to experience compassionate care?</h3>
      <a href="/contact" className="button cta-yellow" style={{ fontSize: '1.2rem', marginTop: '1rem', background: '#F6E05E', color: '#2991fd' }}>Get Started</a>
    </section>
  </main>
);

export default Home;
