import React from 'react';
import Carousel from '../carousel/carousel';
import Card from '../card/card';
import styles from './scroll.module.css';

const Scroll = () => {
  return (
    <div className={styles.content}>
      <Carousel />
      <div className={styles.cardContainer}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Scroll;
