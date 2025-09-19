import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TestimonialCard from './TestimonialCard';
import styles from '../styles/TestimonialsCarousel.module.css';

const TestimonialsCarousel = ({ testimonials }) => {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const trackRef = useRef(null);

  const goTo = (i) => setIndex((i + total) % total);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  return (
    <section aria-label="Client Testimonials Carousel" className={styles.carouselContainer}>
      <button
        className={`${styles.carouselBtn} ${styles.left}`}
        aria-label="Previous testimonial"
        onClick={prev}
        tabIndex={0}
      >
        &#8592;
      </button>
      <button
        className={`${styles.carouselBtn} ${styles.right}`}
        aria-label="Next testimonial"
        onClick={next}
        tabIndex={0}
      >
        &#8594;
      </button>
      <div style={{ overflow: 'hidden' }}>
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={index}
            className={styles.carouselTrack}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.5 }}
            ref={trackRef}
            aria-live="polite"
          >
            <TestimonialCard {...testimonials[index]} idx={index} />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className={styles.carouselDots} aria-label="Testimonial navigation dots">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={styles.carouselDot + (i === index ? ' ' + styles.active : '')}
            aria-label={`Go to testimonial ${i + 1}`}
            aria-current={i === index}
            onClick={() => goTo(i)}
            tabIndex={0}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
