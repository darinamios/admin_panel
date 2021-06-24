import React from 'react';
import styles from './Heading.module.css';

function Heading() {
    return (
        <div className={styles.heading}>
            <label className={styles.label}>Список заказов</label> 
        </div>
    );
  }
  export default Heading;