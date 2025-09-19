import React from 'react';
import '../styles/global.css';

const Footer = () => (
  <footer style={{
    background: 'var(--primary-blue-gradient)',
    color: 'var(--text-light)',
    padding: 'var(--spacing-3xl) var(--spacing-xl) var(--spacing-xl)',
    marginTop: 'var(--spacing-3xl)'
  }} aria-label="Site Footer">
    <div className="container">
      {/* Enhanced Footer Grid */}
      <div className="flex flex-wrap gap-xl mb-xl" style={{ 
        justifyContent: 'space-between',
        alignItems: 'flex-start'
      }}>
        {/* Brand Section */}
        <div style={{ flex: '1', minWidth: '280px' }}>
          <div style={{
            fontSize: 'var(--font-size-lg)',
            fontWeight: '700',
            marginBottom: 'var(--spacing-md)',
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--spacing-sm)'
          }}>
            <span style={{ fontSize: '2rem' }}>👼</span>
            Angel Touch Homecare Services
          </div>
          <p style={{ 
            color: 'rgba(255,255,255,0.9)',
            marginBottom: 'var(--spacing-lg)',
            lineHeight: '1.6'
          }}>
            © {new Date().getFullYear()} Angel Touch Homecare Services<br />
            Lowell, MA & Surrounding Areas
          </p>
        </div>

        {/* Contact Information */}
        <div style={{ flex: '1', minWidth: '280px' }}>
          <h3 style={{ 
            color: 'var(--accent-gold)',
            marginBottom: 'var(--spacing-md)',
            fontSize: 'var(--font-size-lg)'
          }}>
            Contact Information
          </h3>
          <div style={{ marginBottom: 'var(--spacing-sm)' }}>
            <div style={{ 
              color: 'rgba(255,255,255,0.9)',
              marginBottom: 'var(--spacing-xs)',
              fontSize: 'var(--font-size-sm)'
            }}>
              <span style={{ fontWeight: '600' }}>Hours:</span> Mon-Fri: 8am-6pm | Sat-Sun: 9am-3pm
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xs)' }}>
            <a 
              href="tel:9785551234" 
              aria-label="Call Angel Touch Homecare Services"
              style={{
                color: 'var(--accent-gold)',
                textDecoration: 'none',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-xs)',
                transition: 'all var(--transition-base)'
              }}
            >
              <span style={{ fontSize: '1.2rem' }}>📞</span>
              (978) 555-1234
            </a>
            <a 
              href="mailto:info@angeltouch.com" 
              aria-label="Email Angel Touch Homecare Services"
              style={{
                color: 'var(--accent-gold)',
                textDecoration: 'none',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-xs)',
                transition: 'all var(--transition-base)'
              }}
            >
              <span style={{ fontSize: '1.2rem' }}>✉️</span>
              info@angeltouch.com
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div style={{ flex: '1', minWidth: '280px' }}>
          <h3 style={{ 
            color: 'var(--accent-gold)',
            marginBottom: 'var(--spacing-md)',
            fontSize: 'var(--font-size-lg)'
          }}>
            Quick Links
          </h3>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: 'var(--spacing-sm)' 
          }}>
            {[
              { href: '/about', text: 'About Us' },
              { href: '/services', text: 'Our Services' },
              { href: '/contact', text: 'Get Started' },
              { href: '/client-portal', text: 'Family Portal' }
            ].map((link, i) => (
              <a key={i} href={link.href} style={{
                color: 'rgba(255,255,255,0.9)',
                textDecoration: 'none',
                transition: 'all var(--transition-base)',
                padding: 'var(--spacing-xs) 0'
              }}>
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="text-center" style={{
        borderTop: '1px solid rgba(255,255,255,0.2)',
        paddingTop: 'var(--spacing-lg)',
        marginBottom: 'var(--spacing-lg)'
      }}>
        <h3 style={{ 
          color: 'var(--accent-gold)',
          marginBottom: 'var(--spacing-md)',
          fontSize: 'var(--font-size-lg)'
        }}>
          Connect With Us
        </h3>
        <div className="flex gap-md flex-center">
          {[
            { icon: '📘', label: 'Facebook', url: '#' },
            { icon: '📷', label: 'Instagram', url: '#' },
            { icon: '💼', label: 'LinkedIn', url: '#' }
          ].map((social, i) => (
            <a key={i}
              href={social.url} 
              aria-label={social.label} 
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.1)',
                fontSize: '1.5rem',
                transition: 'all var(--transition-base)',
                textDecoration: 'none'
              }}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Legal Links */}
      <div className="text-center" style={{
        borderTop: '1px solid rgba(255,255,255,0.2)',
        paddingTop: 'var(--spacing-lg)',
        color: 'rgba(255,255,255,0.8)',
        fontSize: 'var(--font-size-sm)'
      }}>
        <div className="flex gap-md flex-center">
          <span style={{ cursor: 'pointer', transition: 'color var(--transition-base)' }}>
            Privacy Policy
          </span>
          <span>|</span>
          <span style={{ cursor: 'pointer', transition: 'color var(--transition-base)' }}>
            Accessibility
          </span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
