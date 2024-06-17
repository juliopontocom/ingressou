// src/components/menu/menu.jsx
import React, { useState } from 'react';
import { VscBellDot, VscBell } from 'react-icons/vsc';
import styles from './menu.module.css';

const Menu = () => {
  const [hasNotification, setHasNotification] = useState(true);

  const handleNotificationClick = () => {
    setHasNotification(!hasNotification);
  };

  return (
    <div className={styles.menu}>
      <div className={styles.menuItem} onClick={handleNotificationClick}>
        {hasNotification ? <VscBellDot className={styles.icon} /> : <VscBell className={styles.icon} />}
      </div>
      <div className={styles.menuItem}>Item 2</div>
      <div className={styles.menuItem}>Item 3</div>
      <div className={styles.menuItem}>Item 4</div>
    </div>
  );
};

export default Menu;
