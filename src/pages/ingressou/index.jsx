// src/pages/ingressou/index.jsx
import React from 'react';
import styles from './ingressou.module.css';
import Banner from '../../components/banner/banner';
import Card from '../../components/card/card';
import Header from '../../components/header/header';

const Ingressou = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Banner />
      <h1>Ingressou Page</h1>
      <p>Welcome to the Ingressou Page</p>
      <Card title="Card Title 1" content="This is the content of the first card." />
      <Card title="Card Title 2" content="This is the content of the second card." />
    </div>
  );
};

export default Ingressou;
