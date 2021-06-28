import React from 'react';
import styles from './Button.module.css';

const Button = ({text, onClickHandler, width}) => {
    return (
        <div className ={styles.addButton} style={{width:width}} >
            <input onClick={onClickHandler} type="button" className ={styles.button_body} value={text}/>
        </div>
    );
  }
  export default Button;
