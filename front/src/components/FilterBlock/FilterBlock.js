import React from 'react';
import styles from './FilterBlock.module.css';

function FilterBlock() {
    return (
        <div className={styles.header}>
            <label className={styles.label}>Список заказов</label> 
        </div>
    );
  }
  export default FilterBlock;