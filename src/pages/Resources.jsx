import React from 'react';
import styles from '../styles/Resources.module.css';

const resources = [
  {
    name: 'Massachusetts Executive Office of Health and Human Services',
    url: 'https://www.mass.gov/orgs/executive-office-of-health-and-human-services',
  },
  {
    name: 'Elder Services of the Merrimack Valley',
    url: 'https://www.esmv.org/',
  },
  {
    name: 'Lowell Senior Center',
    url: 'https://www.lowellma.gov/317/Senior-Center',
  },
  {
    name: 'Alzheimer’s Association MA/NH Chapter',
    url: 'https://www.alz.org/manh',
  },
  {
    name: 'MassOptions (Aging & Disability Resource Consortium)',
    url: 'https://www.massoptions.org/',
  },
];

const Resources = () => (
  <main className={styles.resourcesContainer} aria-label="Helpful Resources for Seniors and Caregivers">
    <h1 className={styles.resourcesTitle}>Helpful Resources</h1>
    <ul className={styles.resourcesList}>
      {resources.map((r) => (
        <li key={r.name} className={styles.resourceCard} tabIndex={-1}>
          <a
            href={r.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resourceLink}
            aria-label={`Open resource: ${r.name}`}
          >
            {r.name}
          </a>
        </li>
      ))}
    </ul>
  </main>
);

export default Resources;
