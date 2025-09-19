import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => (
  <footer className={styles.footer} aria-label="Site Footer">
    <div className={styles.footerGrid}>
      <div className={styles.brandSection}>
        <div className={styles.companyName}>
          Angel Touch Homecare Services &copy; {new Date().getFullYear()}<br />
          Lowell, MA & Surrounding Areas
        </div>
      </div>
      <div className={styles.infoSection}>
        <div className={styles.info}>
          <span>Mon-Fri: 8am-6pm</span> | <span>Sat-Sun: 9am-3pm</span>
        </div>
        <div className={styles.contactLinks}>
          <a href="tel:9785551234" aria-label="Call Angel Touch Homecare Services">(978) 555-1234</a>
          <span className={styles.divider}>|</span>
          <a href="mailto:info@angeltouch.com" aria-label="Email Angel Touch Homecare Services">info@angeltouch.com</a>
        </div>
      </div>
      <div className={styles.socialSection}>
        <a href="#" aria-label="Facebook" className={styles.icon} tabIndex={0}><i className="fab fa-facebook" aria-hidden="true"></i></a>
        <a href="#" aria-label="Instagram" className={styles.icon} tabIndex={0}><i className="fab fa-instagram" aria-hidden="true"></i></a>
        <a href="#" aria-label="LinkedIn" className={styles.icon} tabIndex={0}><i className="fab fa-linkedin" aria-hidden="true"></i></a>
      </div>
    </div>
    <div className={styles.legal}>
      <span>Privacy Policy</span> | <span>Accessibility</span>
    </div>
  </footer>
);

export default Footer;
