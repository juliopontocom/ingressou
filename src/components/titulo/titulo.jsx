// src/components/titulo/titulo.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './titulo.module.css';

const Titulo = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <h1 className={styles.titulo} onClick={handleClick}>
      Ingressou
    </h1>
  );
};

export default Titulo;
