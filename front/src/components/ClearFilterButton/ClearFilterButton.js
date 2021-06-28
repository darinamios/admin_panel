import React from 'react';
import styles from './ClearFilterButton.module.css';

const ClearFilterButton = ({text, onClickHandler}) => {
    return (
        <div className ={styles.filterButton}>
            <input onClick={onClickHandler} type="button" className ={styles.button_body} value={text}/>
        </div>
    );
  }
  export default ClearFilterButton;
