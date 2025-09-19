import React from 'react';
import '../styles/global.css';

// Enhanced About page with modern design
const credentials = [
  { icon: '🏥', title: 'Licensed Agency', desc: 'Registered Home Care Agency (MA Executive Office of Health and Human Services)' },
  { icon: '🛡️', title: 'Full Insurance', desc: 'Liability insurance & worker\'s compensation coverage' },
  { icon: '🔒', title: 'HIPAA Compliant', desc: 'Full compliance for client data privacy protection' },
  { icon: '✅', title: 'Verified Staff', desc: 'Staff CORI checks & verified caregiver qualifications' },
  { icon: '⭐', title: 'Experienced', desc: '10+ years of hands-on caregiving experience' },
  { icon: '📜', title: 'Certified', desc: 'Small Business Administration certificate' },
];

const About = () => (
  <main className="main-content container" aria-label="About Angel Touch Homecare Services">
    {/* Enhanced Hero Section */}
    <section className="text-center mb-xl" style={{
      background: 'var(--primary-blue-gradient)',
      borderRadius: 'var(--card-radius-lg)',
      padding: 'var(--spacing-3xl) var(--spacing-xl)',
      color: 'var(--text-light)',
      marginBottom: 'var(--spacing-3xl)'
    }}>
      <h1 style={{ 
        fontSize: 'clamp(2rem, 5vw, 3rem)',
        marginBottom: 'var(--spacing-lg)',
        color: 'var(--text-light)'
      }}>
        About Angel Touch Homecare Services
      </h1>
      <p className="lead" style={{ 
        color: 'rgba(255,255,255,0.95)',
        maxWidth: '600px',
        margin: '0 auto',
        fontSize: 'var(--font-size-xl)'
      }}>
        Founded on compassion, built on expertise, dedicated to enhancing lives through personalized care.
      </p>
    </section>

    {/* Mission & Story Grid */}
    <div className="flex flex-wrap gap-xl mb-xl" style={{ alignItems: 'flex-start' }}>
      {/* Founder Section */}
      <aside className="card" style={{ 
        flex: '1', 
        minWidth: '350px',
        background: 'var(--card-bg-gradient)',
        textAlign: 'center'
      }} aria-label="Founder and Vision">
        <div style={{
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          background: 'var(--primary-blue-gradient)',
          margin: '0 auto var(--spacing-lg)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '3rem',
          boxShadow: 'var(--card-shadow)'
        }}>
          👩‍⚕️
        </div>
        <h2 className="mb-md">Our Founder's Vision</h2>
        <p style={{ color: 'var(--text-secondary)', fontStyle: 'italic' }}>
          "Every person deserves care that honors their dignity, independence, and unique story. At Angel Touch, we're not just providing services—we're creating meaningful connections."
        </p>
      </aside>

      {/* Mission & Story */}
      <section style={{ flex: '2', minWidth: '400px' }} aria-label="Our Mission and Story">
        <div className="card mb-lg">
          <h2 className="mb-md" style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
            <span style={{ fontSize: '2rem' }}>🎯</span>
            Our Mission
          </h2>
          <p className="lead">
            To provide compassionate, reliable, and personalized non-medical in-home care services that enhance the quality of life for seniors and individuals with disabilities in Lowell, Massachusetts and surrounding communities.
          </p>
        </div>

        <div className="card">
          <h2 className="mb-md" style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
            <span style={{ fontSize: '2rem' }}>📖</span>
            Our Story
          </h2>
          <p>
            Angel Touch Homecare Services was founded by a certified home health aide with over a decade of hands-on caregiving experience and a background in healthcare management. Inspired by a passion for dignity, independence, and holistic support, our founder built Angel Touch to deliver the highest standards of care with warmth and professionalism.
          </p>
        </div>
      </section>
    </div>

    {/* Enhanced Credentials Grid */}
    <section className="mb-xl">
      <h2 className="text-center mb-xl">Our Credentials & Certifications</h2>
      <div className="flex flex-wrap gap-lg" style={{ justifyContent: 'center' }}>
        {credentials.map((cred, i) => (
          <div key={i} className="card" style={{
            flex: '1',
            minWidth: '280px',
            maxWidth: '350px',
            textAlign: 'center',
            padding: 'var(--spacing-lg)',
            transition: 'all var(--transition-base)',
            cursor: 'pointer'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-md)' }}>
              {cred.icon}
            </div>
            <h3 className="mb-sm" style={{ color: 'var(--primary-blue)' }}>
              {cred.title}
            </h3>
            <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: 'var(--font-size-sm)' }}>
              {cred.desc}
            </p>
          </div>
        ))}
      </div>
    </section>

    {/* Enhanced Legal Structure Section */}
    <section className="card" style={{
      background: 'var(--accent-green-gradient)',
      color: 'var(--text-light)',
      textAlign: 'center',
      padding: 'var(--spacing-2xl)'
    }} aria-label="Legal Structure and Service Area">
      <h2 className="mb-lg" style={{ 
        color: 'var(--text-light)',
        fontSize: 'var(--font-size-3xl)'
      }}>
        Legal Structure & Service Area
      </h2>
      <p className="lead" style={{ 
        color: 'rgba(255,255,255,0.95)',
        maxWidth: '700px',
        margin: '0 auto'
      }}>
        We are a Limited Liability Company (LLC) headquartered in Lowell, MA, proudly serving families throughout Lowell and the surrounding communities of Dracut, Chelmsford, Tewksbury, and Billerica.
      </p>
    </section>
  </main>
);

export default About;