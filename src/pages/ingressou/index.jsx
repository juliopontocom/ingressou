import React from 'react';
import Header from '../../components/header/header';
import Carousel from '../../components/carousel/carousel';
import styles from './ingressou.module.css';

const Ingressou = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Carousel />
    </div>
  );
};

export default Ingressou;
