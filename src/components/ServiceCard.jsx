import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/ServiceCard.module.css';

const icons = {
  'Personal Care': '🛁',
  'Companionship & Supervision': '🤝',
  'Meal Planning & Preparation': '🍽️',
  'Medication Reminders': '💊',
  'Light Housekeeping & Laundry': '🧹',
  'Transportation & Escort': '🚗',
};

const ServiceCard = ({ title, description, image, alt }) => (
  <div className={styles.card} tabIndex={0} aria-label={`${title} service details`}>
    {image && (
      <img 
        src={image} 
        alt={alt || `${title} - home care service illustration`} 
        className={styles.img} 
        loading="lazy"
        style={{ 
          width: '100%', 
          borderRadius: '18px', 
          marginBottom: '0.5rem', 
          maxHeight: 120, 
          objectFit: 'cover',
          transition: 'transform 0.2s'
        }} 
      />
    )}
    <div className={styles.icon} aria-hidden="true" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
      {icons[title] || '✨'}
    </div>
    <h3 style={{ color: 'var(--primary-blue)' }}>{title}</h3>
    <p style={{ color: 'var(--text-dark)' }}>{description}</p>
    <div className={styles.ctaGroup}>
      <button className={styles.ctaBtn} aria-label={`Learn more about ${title}`}>Learn More</button>
      <button className={styles.ctaBtn} aria-label={`Add ${title} to care plan`}>Add to Plan</button>
    </div>
  </div>
);

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  alt: PropTypes.string,
};

export default ServiceCard;
