import React from 'react';
import styles from './FilterButton.module.css';

const FilterButton = ({text, onClickHandler}) => {
    return (
        <div className ={styles.filterButton}>
            <div className ={styles.ico}/>
            <input onClick={onClickHandler} type="button" className ={styles.button_body} value={text}/>
        </div>
    );
  }
  export default FilterButton;
