import React from 'react';
import styles from './card.module.css';

const Card = ({ backgroundImage }) => {
  return (
    <div className={styles.card} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className={styles.info}>
        <span className={styles.date}>15/06</span>
        <span className={styles.place}>Coolture</span>
      </div>
    </div>
  );
};

export default Card;
