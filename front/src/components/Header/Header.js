import React from 'react';
import styles from './Header.module.css';

function Header() {
    return (
        <div className={styles.header}>
            <label className={styles.label}>Список заказов</label> 
        </div>
    );
  }
  export default Header;