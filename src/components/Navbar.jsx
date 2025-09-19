import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';
import styles from '../styles/Navbar.module.css';
import { FaHome, FaHandsHelping, FaUserNurse, FaQuoteLeft, FaQuestionCircle, FaPhoneAlt, FaBook } from 'react-icons/fa';

const navLinks = [
  { to: '/', label: 'Home', icon: <FaHome /> },
  { to: '/about', label: 'About', icon: <FaHandsHelping /> }, // Added About page
  { to: '/services', label: 'Services', icon: <FaHandsHelping /> },
  { to: '/caregivers', label: 'Caregivers', icon: <FaUserNurse /> },
  { to: '/testimonials', label: 'Testimonials', icon: <FaQuoteLeft /> },
  { to: '/faqs', label: 'FAQs', icon: <FaQuestionCircle /> },
  { to: '/resources', label: 'Resources', icon: <FaBook /> },
  { to: '/contact', label: 'Contact', icon: <FaPhoneAlt /> },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  return (
    <nav className={styles.navbar} aria-label="Main Navigation">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <div className={styles.logoSection}>
        <Link to="/" aria-label="Angel Touch Homecare Services Home" tabIndex={0} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', gap: '0.5rem' }}>
          <Logo />
          <span className={styles.brandName}>
            Angel Touch Homecare Services
          </span>
        </Link>
        <ThemeToggle />
      </div>
      <button
        className={styles.hamburger}
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        aria-controls="main-nav-links"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className={styles.hamburgerBar}></span>
        <span className={styles.hamburgerBar}></span>
        <span className={styles.hamburgerBar}></span>
      </button>
      <ul
        className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}
        id="main-nav-links"
        role="menubar"
      >
        {navLinks.map(({ to, label, icon }) => (
          <li key={to} role="none">
            <Link
              to={to}
              aria-label={label}
              className={location.pathname === to ? styles.active : ''}
              tabIndex={menuOpen || window.innerWidth > 900 ? 0 : -1}
              role="menuitem"
              onClick={() => setMenuOpen(false)}
            >
              <span className={styles.icon}>{icon}</span>
              <span className={styles.linkText}>{label}</span>
            </Link>
          </li>
        ))}
        <li>
          <Link to="/contact" className={styles.ctaButton} aria-label="Book a Consultation">
            Book a Consultation
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
