import React from 'react';
import CaregiverCard from '../components/CaregiverCard';
// Search keyword: "diverse healthcare team headshots" - Source: Pexels
import caregiversImg from '../assets/caregivers/pexels-tima-miroshnichenko-5452228.jpg';
import styles from '../styles/CaregiverCard.module.css';

const caregivers = [
  {
    name: 'Maria S.',
    photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80',
    bio: 'Certified Home Health Aide with 8 years of experience. Specializes in dementia care and companionship, bringing warmth and understanding to every interaction.',
    certifications: ['Certified Home Health Aide', 'CPR', 'First Aid', 'Dementia Care Specialist'],
  },
  {
    name: 'James T.',
    photo: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=300&q=80',
    bio: 'Background in nursing and elder care with 12+ years of experience. Passionate about supporting independence, dignity, and quality of life for all clients.',
    certifications: ['RN Consultant', 'Elder Abuse Prevention', 'Medication Management'],
  },
  {
    name: 'Linda K.',
    photo: 'https://images.unsplash.com/photo-1594824375135-a32745879d2c?auto=format&fit=crop&w=300&q=80',
    bio: 'Over 10 years in home care with expertise in meal preparation, medication reminders, and building lasting trust with clients and families.',
    certifications: ['HIPAA Certified', 'Infection Control', 'Nutrition Specialist'],
  },
  {
    name: 'David R.',
    photo: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=300&q=80',
    bio: 'Compassionate caregiver with 6 years of experience in personal care and transportation services. Known for his patience and reliability.',
    certifications: ['Personal Care Assistant', 'Safe Transportation', 'CPR'],
  },
];

const Caregivers = () => (
  <main className="main-content" style={{ padding: '0 2rem 2rem 2rem' }} aria-label="Meet Our Caregivers">
    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
      <h1 style={{ marginBottom: '1rem', fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary-blue)' }}>Meet Our Compassionate Caregivers</h1>
      <img 
        src={caregiversImg} 
        alt="Professional and diverse team of certified caregivers demonstrating expertise and compassion in home healthcare" 
        style={{ 
          width: '100%', 
          maxWidth: '600px', 
          borderRadius: '24px', 
          boxShadow: '0 4px 20px rgba(111, 168, 220, 0.15)',
          marginBottom: '2rem'
        }} 
        loading="lazy"
      />
      <p style={{ 
        fontSize: '1.2rem', 
        color: 'var(--text-muted)', 
        maxWidth: '700px', 
        margin: '0 auto',
        lineHeight: '1.6'
      }}>
        Our carefully selected team of certified caregivers brings years of experience, compassion, and dedication to providing exceptional home care services.
      </p>
    </div>
    <section aria-label="Caregiver Profiles" style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '2rem',
      maxWidth: '1200px',
      margin: '0 auto',
    }}>
      {caregivers.map((cg, idx) => (
        <CaregiverCard key={cg.name} name={cg.name} photo={cg.photo} bio={cg.bio} certifications={cg.certifications} idx={idx} />
      ))}
    </section>
    <section aria-label="Join Our Team" style={{ 
      textAlign: 'center', 
      marginTop: '4rem',
      padding: '3rem 2rem',
      background: 'var(--accent-gold)',
      borderRadius: '24px',
      color: 'var(--primary-blue)'
    }}>
      <h2 style={{ color: 'var(--primary-blue)', marginBottom: '1rem' }}>Join Our Team</h2>
      <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
        Are you a compassionate caregiver looking to make a difference? We're always seeking qualified professionals to join our team.
      </p>
      <a href="/contact" className="cta" style={{ background: 'var(--primary-blue)', color: 'var(--text-light)' }}>Apply Today</a>
    </section>
    <section aria-label="Caregiver Stories" style={{
      textAlign: 'center',
      marginTop: '3rem',
      padding: '2.5rem 1.5rem',
      background: 'var(--white)',
      borderRadius: '20px',
      boxShadow: '0 2px 10px rgba(44, 122, 123, 0.08)',
      color: 'var(--primary-blue)',
      maxWidth: '700px',
      marginLeft: 'auto',
      marginRight: 'auto',
    }}>
      <h2 style={{ color: 'var(--primary-blue)', marginBottom: '1rem' }}>Meet More of Our Team</h2>
      <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
        Our team is growing! We have many more dedicated caregivers ready to help you or your loved one live independently and with dignity. Ask us for more bios and stories during your consultation.
      </p>
      <a href="/contact" className="cta" style={{ background: 'var(--primary-blue)', color: 'var(--text-light)' }}>Request More Info</a>
    </section>
  </main>
);

export default Caregivers;
