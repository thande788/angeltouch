import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/CaregiverCard.module.css';
import { motion } from 'framer-motion';

const CaregiverCard = ({ name, photo, bio, certifications, idx }) => (
  <motion.div
    className={styles.card}
    tabIndex={0}
    aria-label={`Caregiver: ${name}`}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay: idx * 0.08 }}
  >
    <img
      src={photo}
      alt={`Photo of ${name}`}
      className={styles.photo}
      loading="lazy"
    />
    <h3>{name}</h3>
    <p>{bio}</p>
    <div
      aria-label="Certifications"
      style={{
        marginTop: '0.5rem',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      {certifications.map((cert) => (
        <span className={styles.badge} key={cert}>
          {cert}
        </span>
      ))}
    </div>
  </motion.div>
);

CaregiverCard.propTypes = {
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  certifications: PropTypes.arrayOf(PropTypes.string).isRequired,
  idx: PropTypes.number,
};

export default CaregiverCard;
