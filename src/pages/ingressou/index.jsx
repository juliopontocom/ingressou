import React from 'react';
import Header from '../../components/header/header';
import Scroll from '../../components/scroll/scroll';
import styles from './ingressou.module.css';

const Ingressou = () => {
  return (
    <div className={styles.page}>
      <Header />
      <Scroll />
    </div>
  );
};

export default Ingressou;
