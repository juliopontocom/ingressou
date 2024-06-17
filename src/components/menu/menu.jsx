// src/components/menu/menu.jsx
import React, { useState } from 'react';
import { VscBellDot, VscBell } from 'react-icons/vsc';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import MarkChatUnreadOutlinedIcon from '@mui/icons-material/MarkChatUnreadOutlined';
import { IoTicketOutline } from 'react-icons/io5';
import styles from './menu.module.css';

const Menu = () => {
  const [hasNotification, setHasNotification] = useState(true);
  const [hasMessage, setHasMessage] = useState(true);

  const handleNotificationClick = () => {
    setHasNotification(!hasNotification);
  };

  const handleMessageClick = () => {
    setHasMessage(!hasMessage);
  };

  return (
    <div className={styles.menu}>
      <div className={styles.menuItem} onClick={handleNotificationClick}>
        {hasNotification ? <VscBellDot className={styles.icon} /> : <VscBell className={styles.icon} />}
      </div>
      <div className={styles.menuItem} onClick={handleMessageClick}>
        {hasMessage ? <MarkChatUnreadOutlinedIcon className={styles.icon} /> : <ChatBubbleOutlineOutlinedIcon className={styles.icon} />}
      </div>
      <div className={styles.menuItem}>
        <IoTicketOutline className={styles.icon} />
      </div>
      <div className={styles.menuItem}>
        <div className={styles.userInfo}>
          <span className={styles.userName}>Camila Loira</span>
          <img src="/src/assets/fotousuario.png" alt="Camila Loira" className={styles.userPhoto} />
        </div>
      </div>
    </div>
  );
};

export default Menu;
