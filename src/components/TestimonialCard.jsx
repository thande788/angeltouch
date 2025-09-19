import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/TestimonialCard.module.css';

const avatars = [
  'https://randomuser.me/api/portraits/women/65.jpg',
  'https://randomuser.me/api/portraits/men/32.jpg',
  'https://randomuser.me/api/portraits/women/44.jpg',
  'https://randomuser.me/api/portraits/women/68.jpg',
  'https://randomuser.me/api/portraits/men/41.jpg',
];

const TestimonialCard = ({ name, text, relation, idx = 0 }) => (
  <div className={styles.card} tabIndex={0} aria-label={`Testimonial from ${name}`}>
    <div className={styles.avatarWrap} aria-hidden="true">
      <img
        src={avatars[idx % avatars.length]}
        alt="Client avatar"
        className={styles.avatar}
        loading="lazy"
      />
      <span className={styles.quoteIcon} aria-hidden="true">❝</span>
    </div>
    <blockquote className={styles.text}>“{text}”</blockquote>
    <div className={styles.footer}>
      <span className={styles.name}>{name}</span>
      <span className={styles.relation}>{relation}</span>
    </div>
  </div>
);

TestimonialCard.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  relation: PropTypes.string.isRequired,
  idx: PropTypes.number,
};

export default TestimonialCard;
