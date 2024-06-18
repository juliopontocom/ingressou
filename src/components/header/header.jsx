import React from 'react';
import styles from './header.module.css';
import Titulo from '../titulo/titulo';
import SearchBar from '../searchbar/searchbar';
import CitySelector from '../cityselector/cityselector';
import Menu from '../menu/menu';

const Header = () => {
  return (
    <header className={styles.header}>
      <Titulo />
      <SearchBar />
      <CitySelector />
      <Menu />
    </header>
  );
};

export default Header;
