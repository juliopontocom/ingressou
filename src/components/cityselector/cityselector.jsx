// src/components/cityselector/cityselector.jsx
import React, { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa'; // Importar ícone do react-icons
import styles from './cityselector.module.css';

const CitySelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState('Porto Alegre');

  const cities = ['Porto Alegre', 'Santa Catarina', 'São Paulo', 'Rio de Janeiro'];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setIsOpen(false);
  };

  return (
    <div className={styles.citySelector}>
      <div className={styles.selectedCity} onClick={toggleDropdown}>
        {selectedCity}
        <FaChevronRight className={`${styles.arrow} ${isOpen ? styles.open : ''}`} />
      </div>
      {isOpen && (
        <ul className={styles.dropdown}>
          {cities.map((city) => (
            <li key={city} onClick={() => handleCitySelect(city)}>
              {city}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CitySelector;
