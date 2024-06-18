import React from 'react';
import Carousel from '../carousel/carousel';
import Card from '../card/card';
import styles from './scroll.module.css';
import imagem1 from '../../assets/imagem1.png';
import imagem2 from '../../assets/imagem2.png';
import imagem3 from '../../assets/imagem3.png';
import imagem4 from '../../assets/imagem4.png';

const Scroll = () => {
  return (
    <div className={styles.content}>
      <Carousel />
      <div className={styles.cardContainer}>
        <Card backgroundImage={imagem1} />
        <Card backgroundImage={imagem2} />
        <Card backgroundImage={imagem3} />
        <Card backgroundImage={imagem4} />
      </div>
    </div>
  );
};

export default Scroll;
