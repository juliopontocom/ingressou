// src/components/header/header.jsx
import React from 'react';
import styles from './header.module.css';
import Titulo from '../titulo/titulo';
import SearchBar from '../searchbar/searchbar';
import CitySelector from '../cityselector/cityselector';

const Header = () => {
  return (
    <header className={styles.header}>
      <Titulo />
      <SearchBar />
      <CitySelector />
      <div className={styles.item}>Item 4</div>
    </header>
  );
};

export default Header;
