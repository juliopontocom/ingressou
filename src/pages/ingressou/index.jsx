import React from 'react';
import Header from '../../components/header/header';
import Carousel from '../../components/carousel/carousel';
import Card from '../../components/card/card';
import styles from './ingressou.module.css';

const Ingressou = () => {
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.content}>
        <Carousel />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Ingressou;
