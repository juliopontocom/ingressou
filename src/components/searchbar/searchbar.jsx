// src/components/searchbar/searchbar.jsx
import React from 'react';
import styles from './searchbar.module.css';

const SearchBar = () => {
  return (
    <input
      type="text"
      className={styles.searchbar}
      placeholder="Pesquisar festas ou usuários"
    />
  );
};

export default SearchBar;
