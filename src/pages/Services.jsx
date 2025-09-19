import React, { useState } from 'react';
import ServiceCard from '../components/ServiceCard';
import styles from '../styles/Services.module.css';
import { motion } from 'framer-motion';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import ChatWidget from '../components/ChatWidget';

// Search keywords and sources for service images:
// Personal care: "caregiver grooming senior" - Source: Unsplash
// Companionship: "caregiver talking with senior" - Source: Pexels  
// Meal prep: "senior cooking with caregiver" - Source: Pixabay
// Housekeeping: "caregiver cleaning senior home" - Source: Pexels
// Transportation: "caregiver helping senior into car" - Source: Unsplash
import personalCareImg from '../assets/services/personal care.jpg';
import companionshipImg from '../assets/services/companionship.jpg';
import mealPrepImg from '../assets/services/meal prep.jpg';
import housekeepingImg from '../assets/services/Housekeeping.jpg';
import transportationImg from '../assets/services/transportation.jpg';

const services = [
	{
		title: 'Personal Care',
		description: 'Bathing, toileting, grooming, and dressing assistance.',
		image: personalCareImg,
		alt: 'Compassionate caregiver gently assisting a senior with personal grooming in a comfortable home setting'
	},
	{
		title: 'Companionship & Supervision',
		description: 'Friendly conversation, safety monitoring, and emotional support.',
		image: companionshipImg,
		alt: 'Caregiver engaging in warm conversation with a senior client, providing emotional support and companionship'
	},
	{
		title: 'Meal Planning & Preparation',
		description: 'Nutritious meal planning, cooking, and dietary support.',
		image: mealPrepImg,
		alt: 'Senior and caregiver preparing a healthy meal together in a bright kitchen'
	},
	{
		title: 'Medication Reminders',
		description: 'Timely reminders to ensure medication compliance.',
		image: personalCareImg, // Using personal care as placeholder for medication reminders
		alt: 'Caregiver providing gentle medication reminder support to ensure client health and safety'
	},
	{
		title: 'Light Housekeeping & Laundry',
		description: 'Tidying, laundry, and maintaining a safe home environment.',
		image: housekeepingImg,
		alt: 'Professional caregiver helping maintain a clean and safe home environment for senior client'
	},
	{
		title: 'Transportation & Escort',
		description: 'Rides and accompaniment to appointments and errands.',
		image: transportationImg,
		alt: 'Caregiver assisting senior client safely into vehicle for medical appointment or errands'
	},
];

const pricing = [
	{ plan: 'Hourly', details: '$28–$35/hour (depending on service level)', min: 28, max: 35, unit: 'hour' },
	{ plan: 'Weekly', details: '20 hours/week at $650', total: 650, hours: 20, unit: 'week' },
	{ plan: 'Monthly', details: '80 hours/month at $2,500', total: 2500, hours: 80, unit: 'month' },
	{ plan: 'Subscription', details: 'Discounts for extended engagements', total: null, unit: 'subscription' },
];

const futureServices = [
	'Dementia and Alzheimer’s care',
	'24-hour live-in care',
	'Post-hospitalization transition services',
];

const pricingOptions = ['Hourly', 'Weekly', 'Monthly'];

const testimonialsData = [
	{
		name: 'Evelyn R.',
		text: 'Angel Touch provided my mother with the most caring and attentive support. Their team truly goes above and beyond! The personalized care plan made such a difference in her daily life.',
		relation: 'Daughter of client',
	},
	{
		name: 'Samuel P.',
		text: 'The caregivers are professional, friendly, and always on time. I have peace of mind knowing my father is in good hands. The communication with family is excellent.',
		relation: 'Son of client',
	},
	{
		name: 'Patricia L.',
		text: 'Their personalized care plans made all the difference for our family. The companion care has brought so much joy to my daily routine. Highly recommend Angel Touch!',
		relation: 'Client',
	},
	{
		name: 'Maria G.',
		text: 'After my surgery, Angel Touch helped me transition back to independence safely. The meal preparation and light housekeeping were exactly what I needed.',
		relation: 'Client',
	},
	{
		name: 'Robert K.',
		text: 'The transportation services have been a lifesaver for my medical appointments. The caregivers are patient, kind, and truly understand our needs.',
		relation: 'Client',
	},
];

const Services = () => {
	const [selected, setSelected] = useState('Hourly');
	const [hours, setHours] = useState(1);

	// Calculate total cost based on selection
	let totalCost = '';
	if (selected === 'Hourly') {
		totalCost = `$${(28 * hours).toLocaleString()} – $${(35 * hours).toLocaleString()} / ${hours} hour${hours > 1 ? 's' : ''}`;
	} else if (selected === 'Weekly') {
		totalCost = `$${(650 * (hours || 1)).toLocaleString()} / ${20 * (hours || 1)} hours (${hours || 1} week${hours > 1 ? 's' : ''})`;
	} else if (selected === 'Monthly') {
		totalCost = `$${(2500 * (hours || 1)).toLocaleString()} / ${80 * (hours || 1)} hours (${hours || 1} month${hours > 1 ? 's' : ''})`;
	}

	return (
		<main className={styles.servicesContainer} aria-label="Our Home Care Services">
			<h1 className={styles.badgeTitle} aria-label="Our Services">Our Services</h1>
			<section aria-labelledby="core-services-title">
				<h2 id="core-services-title" className={styles.badgeTitle} aria-label="Core Services">Core Services</h2>
				<div className={styles.servicesGrid} role="list" aria-label="List of core homecare services">
					{services.map((service, idx) => (
						<motion.div
							key={service.title}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.2 }}
							transition={{ duration: 0.5, delay: idx * 0.08 }}
							aria-label={service.title}
							role="listitem"
						>
							<ServiceCard
								title={service.title}
								description={service.description}
								image={service.image}
								alt={service.alt}
							/>
						</motion.div>
					))}
				</div>
			</section>
			<section className={styles.pricingSection} aria-labelledby="pricing-options-title">
				<h2 id="pricing-options-title" className={styles.badgeTitle} aria-label="Pricing Options">Pricing Options</h2>
				<div className={styles.pricingToggle} role="group" aria-label="Select pricing type">
					{pricingOptions.map((option) => (
						<button
							key={option}
							className={styles.toggleBtn + (selected === option ? ' ' + styles.active : '')}
							aria-pressed={selected === option}
							onClick={() => { setSelected(option); setHours(1); }}
							type="button"
						>
							{option}
						</button>
					))}
				</div>
				{/* Input for number of hours/weeks/months */}
				{selected === 'Hourly' && (
					<label htmlFor="hours" style={{ display: 'block', textAlign: 'center', marginBottom: '1rem' }}>
						<span style={{ fontWeight: 600, color: 'var(--primary-blue)' }}>Hours:</span>
						<input
							id="hours"
							type="number"
							min="1"
							max="24"
							value={hours}
							onChange={e => setHours(Number(e.target.value))}
							style={{ marginLeft: '0.7em', width: 60, fontSize: '1.1rem', borderRadius: 8, border: '1.5px solid var(--primary-blue)', padding: '0.2em 0.5em' }}
							aria-label="Number of hours for hourly pricing"
						/>
					</label>
				)}
				{(selected === 'Weekly' || selected === 'Monthly') && (
					<label htmlFor="periods" style={{ display: 'block', textAlign: 'center', marginBottom: '1rem' }}>
						<span style={{ fontWeight: 600, color: 'var(--primary-blue)' }}>{selected === 'Weekly' ? 'Weeks:' : 'Months:'}</span>
						<input
							id="periods"
							type="number"
							min="1"
							max="12"
							value={hours}
							onChange={e => setHours(Number(e.target.value))}
							style={{ marginLeft: '0.7em', width: 60, fontSize: '1.1rem', borderRadius: 8, border: '1.5px solid var(--primary-blue)', padding: '0.2em 0.5em' }}
							aria-label={`Number of ${selected === 'Weekly' ? 'weeks' : 'months'} for pricing`}
						/>
					</label>
				)}
				<div className={styles.totalCost} aria-live="polite">
					{totalCost}
				</div>
				<ul className={styles.pricingList}>
					{pricing.map((p) => (
						<li key={p.plan}>
							<strong>{p.plan}:</strong> {p.details}
						</li>
					))}
				</ul>
			</section>
			<TestimonialsCarousel testimonials={testimonialsData} />
			<section className={styles.futureSection} aria-labelledby="future-services-title">
				<h2 id="future-services-title">Launching Soon</h2>
				<ul className={styles.futureList}>
					{futureServices.map((f) => (
						<li key={f}>{f}</li>
					))}
				</ul>
			</section>
			{/* Testimonials carousel and sticky button will be added next */}
			<a href="/contact" className={styles.stickyConsult} aria-label="Book a Consultation">Book Consultation</a>
			<ChatWidget />
		</main>
	);
};

export default Services;
