import React from 'react';

const Logo = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" aria-label="Angel Touch Homecare Logo" role="img">
    {/* Angelic silhouette */}
    <ellipse cx="30" cy="30" rx="18" ry="28" fill="#e3f0fa" stroke="#b3c7e6" strokeWidth="2" />
    {/* Glowing touch icon */}
    <circle cx="30" cy="45" r="8" fill="#fffbe6" stroke="#f7d774" strokeWidth="2" />
    {/* Halo */}
    <ellipse cx="30" cy="15" rx="10" ry="3" fill="#fffbe6" stroke="#f7d774" strokeWidth="1" />
  </svg>
);

export default Logo;
