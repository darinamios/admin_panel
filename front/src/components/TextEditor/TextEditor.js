import React, { useState } from 'react';
import styles from './TextEditor.module.css';
import { useSelector, useDispatch } from 'react-redux';

const TextEditor = ({editorSelector, onChange, onCancel}) => {
    //getData
    const {label, pre, placeholder, filterValue} = useSelector(editorSelector);
    const dispatch = useDispatch();
    //state
    const [isEmpty, setEmpty] = useState(!filterValue);
    //handlers
    const handleCancel = (event) => {
        console.log('handleCancel');
        setEmpty(true);
        dispatch(onCancel())
    }
    const handleInput = (event) => {
        const textValue = event.target.value;
        console.log('handleInput', textValue);
        setEmpty(!textValue);
        dispatch(onChange(textValue));
    }
    const btnClass = isEmpty ? styles.cancel  + ' ' +  styles.empty : styles.cancel;
    return (
        <div className={styles.textEditor}>
            <label className={styles.label}>{label}</label>
            <div className={styles.text_input}>
            <div className={styles.pre}>{pre}</div>
            <input className={styles.field} placeholder={placeholder} onInput={handleInput} value={filterValue}/>
            <input type="button" className={btnClass} onClick={handleCancel}/>
            </div>
        </div>
    );
  }
  export default TextEditor;
