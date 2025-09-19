import React, { useState } from 'react';
import styles from '../styles/FAQs.module.css';

const faqs = [
	{
		q: 'What areas do you serve?',
		a: 'We serve Lowell, Dracut, Chelmsford, Tewksbury, Billerica, and nearby towns throughout the Greater Lowell area.',
	},
	{
		q: 'Are your caregivers certified?',
		a: 'Yes, all caregivers are experienced, certified, and undergo comprehensive background checks, CORI screening, and ongoing training to maintain the highest standards of care.',
	},
	{
		q: 'How do I get started with services?',
		a: "Contact us via our online form or phone to schedule a complimentary consultation. We'll conduct a comprehensive assessment and create a personalized care plan tailored to your specific needs.",
	},
	{
		q: 'What payment options are available?',
		a: "We accept private pay, long-term care insurance, and some Medicaid programs. We'll work with you to find the most suitable payment option for your situation.",
	},
	{
		q: 'Can I choose my caregiver?',
		a: 'Absolutely! We strive for consistent caregiver assignments and carefully match clients with caregivers who best fit their personality, needs, and preferences.',
	},
	{
		q: 'Is my information kept confidential?',
		a: 'Yes, we are fully HIPAA-compliant and prioritize client privacy and data security. All personal and medical information is kept strictly confidential.',
	},
	{
		q: 'Do you provide 24-hour care?',
		a: "We offer flexible scheduling including hourly, daily, and extended care options. While we currently focus on scheduled visits, we're expanding to offer 24-hour live-in care.",
	},
	{
		q: "What if I'm not satisfied with the service?",
		a: 'Your satisfaction is our priority. We offer ongoing communication and will adjust care plans or reassign caregivers as needed to ensure you receive the best possible care.',
	},
];

const FAQItem = ({ faq, isOpen, onClick, idx }) => (
	<li className={styles.faqItem}>
		<button
			className={styles.faqQuestion}
			aria-expanded={isOpen}
			aria-controls={`faq-answer-${idx}`}
			id={`faq-question-${idx}`}
			onClick={onClick}
			tabIndex={0}
		>
			{faq.q}
			<span
				className={
					isOpen
						? `${styles.faqIcon} ${styles.open}`
						: styles.faqIcon
				}
				aria-hidden="true"
			>
				▶
			</span>
		</button>
		{isOpen && (
			<div
				className={styles.faqAnswer}
				id={`faq-answer-${idx}`}
				role="region"
				aria-labelledby={`faq-question-${idx}`}
			>
				{faq.a}
			</div>
		)}
	</li>
);

const FAQs = () => {
	const [openIdx, setOpenIdx] = useState(null);
	return (
		<main
			className={styles.faqsContainer}
			aria-label="Frequently Asked Questions"
		>
			<h1 className={styles.faqsTitle}>Frequently Asked Questions</h1>
			<img
				src="https://images.pexels.com/photos/7551615/pexels-photo-7551615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
				alt="Seniors and family learning together, symbolizing support and knowledge sharing"
				className={styles.faqsImg}
			/>
			<ul className={styles.faqList}>
				{faqs.map((faq, idx) => (
					<FAQItem
						key={faq.q}
						faq={faq}
						isOpen={openIdx === idx}
						onClick={() =>
							setOpenIdx(openIdx === idx ? null : idx)
						}
						idx={idx}
					/>
				))}
			</ul>
		</main>
	);
};

export default FAQs;
