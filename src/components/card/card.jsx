import React from 'react';
import styles from './card.module.css';
import imagem1 from '../../assets/imagem1.png';

const Card = () => {
  return (
    <div className={styles.card} style={{ backgroundImage: `url(${imagem1})` }}>
      <div className={styles.info}>
        <span className={styles.date}>15/06</span>
        <span className={styles.place}>Coolture</span>
      </div>
    </div>
  );
};

export default Card;
