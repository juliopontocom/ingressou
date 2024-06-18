import React, { useState, useEffect } from 'react';
import { FaLessThan, FaGreaterThan, FaCircle, FaDotCircle } from 'react-icons/fa';
import styles from './carousel.module.css';
import banner1 from '../../assets/banner1.jpeg';
import banner2 from '../../assets/banner2.jpeg';
import banner3 from '../../assets/banner3.jpeg';

const banners = [
  { url: banner1, alt: 'Banner 1' },
  { url: banner2, alt: 'Banner 2' },
  { url: banner3, alt: 'Banner 3' }
];

const Carousel = () => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      showNextImage();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const showNextImage = () => {
    setImageIndex(index => (index === banners.length - 1 ? 0 : index + 1));
  };

  const showPrevImage = () => {
    setImageIndex(index => (index === 0 ? banners.length - 1 : index - 1));
  };

  return (
    <section className={styles.carousel}>
      <div className={styles.slider}>
        {banners.map(({ url, alt }, index) => (
          <img
            key={url}
            src={url}
            alt={alt}
            aria-hidden={imageIndex !== index}
            className={`${styles.img} ${imageIndex === index ? styles.active : ''}`}
            style={{ transform: `translateX(${-100 * imageIndex}%)` }}
          />
        ))}
      </div>
      <button
        onClick={showPrevImage}
        className={`${styles.btn} ${styles.left}`}
        aria-label="View Previous Image"
      >
        <FaLessThan aria-hidden style={{ color: '#4538C3' }} />
      </button>
      <button
        onClick={showNextImage}
        className={`${styles.btn} ${styles.right}`}
        aria-label="View Next Image"
      >
        <FaGreaterThan aria-hidden style={{ color: '#4538C3' }} />
      </button>
    </section>
  );
};

export default Carousel;
