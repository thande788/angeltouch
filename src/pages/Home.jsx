import React from 'react';
import '../styles/global.css';

const Home = () => (
  <main className="main-content home-hero">
    {/* Enhanced Hero Section */}
    <section className="hero-section">
      <div className="hero-overlay" aria-hidden="true"></div>
      <div className="hero-content">
        <h1 className="tagline">
          Compassion in Every Touch
        </h1>
        <p className="hero-desc">
          Providing compassionate, reliable, and personalized in-home care for seniors and individuals with disabilities in Lowell, MA and surrounding communities.
        </p>
        <a 
          href="/contact" 
          className="button cta hero-cta" 
          aria-label="Book a Free Consultation"
        >
          Book a Free Consultation
        </a>
      </div>
    </section>

    {/* Welcome Section with Enhanced Design */}
    <section className="container" style={{ 
      background: 'var(--card-bg-gradient)', 
      borderRadius: 'var(--card-radius-lg)', 
      boxShadow: 'var(--card-shadow)', 
      padding: 'var(--spacing-3xl) var(--spacing-xl)', 
      margin: 'var(--spacing-3xl) auto',
      border: 'var(--card-border)'
    }}>
      <h2 className="text-center mb-xl" style={{ 
        fontSize: 'clamp(2rem, 4vw, 2.5rem)',
        background: 'var(--primary-blue-gradient)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      }}>
        Welcome to Angel Touch Homecare Services
      </h2>
      
      <div className="flex flex-wrap" style={{ 
        alignItems: 'flex-start', 
        gap: 'var(--spacing-2xl)',
        justifyContent: 'space-between'
      }}>
        <div style={{ 
          flex: '2', 
          minWidth: '320px'
        }}>
          <p className="lead mb-lg">
            Our mission is to enhance quality of life through deeply personalized care plans, delivered by experienced and certified caregivers. We use advanced client management software for seamless communication, scheduling, and care coordination.
          </p>
          <div className="card" style={{
            background: 'var(--primary-blue-gradient-soft)',
            border: '2px solid var(--primary-blue-light)',
            padding: 'var(--spacing-lg)',
            borderRadius: 'var(--card-radius)'
          }}>
            <h3 style={{ 
              color: 'var(--primary-blue-dark)',
              fontSize: 'var(--font-size-xl)',
              marginBottom: 'var(--spacing-sm)'
            }}>
              Why Choose Us?
            </h3>
            <p style={{ 
              fontWeight: '600', 
              color: 'var(--primary-blue-dark)',
              margin: 0
            }}>
              Custom care plans, consistent caregiver assignments, strong local ties, and transparent pricing set us apart.
            </p>
          </div>
        </div>
        
        <div style={{ 
          flex: '1', 
          minWidth: '300px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div className="card" style={{
            padding: 'var(--spacing-sm)',
            background: 'var(--glass-bg)',
            backdropFilter: 'var(--glass-backdrop)',
            border: 'var(--glass-border)'
          }}>
            <img 
              src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80" 
              alt="Caregiver helping senior at home" 
              style={{ 
                width: '100%', 
                maxWidth: '350px',
                borderRadius: 'var(--card-radius)',
                boxShadow: 'var(--card-shadow-soft)'
              }} 
              loading="lazy" 
            />
          </div>
        </div>
      </div>
    </section>

    {/* Enhanced Features Grid */}
    <section className="container mb-xl">
      <h2 className="text-center mb-xl">Our Services at a Glance</h2>
      <div className="flex flex-wrap gap-lg" style={{ justifyContent: 'center' }}>
        {[
          { icon: '🏠', title: 'Personal Care', desc: 'Bathing, grooming, and daily living assistance' },
          { icon: '💊', title: 'Medication Management', desc: 'Reminders and organization for medications' },
          { icon: '🍳', title: 'Meal Preparation', desc: 'Nutritious meals tailored to dietary needs' },
          { icon: '🧹', title: 'Light Housekeeping', desc: 'Maintaining a clean and safe environment' },
          { icon: '🚗', title: 'Transportation', desc: 'Appointments and errands assistance' },
          { icon: '💝', title: 'Companionship', desc: 'Social interaction and emotional support' }
        ].map((service, index) => (
          <div key={index} className="card" style={{
            flex: '1',
            minWidth: '280px',
            maxWidth: '350px',
            textAlign: 'center',
            padding: 'var(--spacing-xl)',
            background: 'var(--card-bg-gradient)',
            transition: 'all var(--transition-base)',
            cursor: 'pointer'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-md)' }}>
              {service.icon}
            </div>
            <h3 className="mb-sm">{service.title}</h3>
            <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>

    {/* Enhanced CTA Section */}
    <section className="container text-center" style={{ 
      background: 'var(--primary-blue-gradient)',
      borderRadius: 'var(--card-radius-lg)',
      padding: 'var(--spacing-3xl) var(--spacing-xl)',
      color: 'var(--text-light)',
      margin: 'var(--spacing-3xl) auto'
    }}>
      <h3 style={{ 
        fontSize: 'clamp(1.5rem, 3vw, 2rem)',
        color: 'var(--text-light)',
        marginBottom: 'var(--spacing-xl)'
      }}>
        Ready to experience compassionate care?
      </h3>
      <div className="flex gap-lg flex-center flex-wrap">
        <a 
          href="/contact" 
          className="button cta-gold"
          style={{ fontSize: 'var(--font-size-lg)' }}
        >
          Get Started Today
        </a>
        <a 
          href="/client-portal" 
          className="button"
          style={{ 
            fontSize: 'var(--font-size-lg)',
            background: 'rgba(255,255,255,0.2)',
            color: 'var(--text-light)',
            border: '2px solid rgba(255,255,255,0.3)'
          }}
        >
          Family Portal Login
        </a>
      </div>
    </section>
  </main>
);

export default Home;
