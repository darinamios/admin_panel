import React, { useState } from 'react';
import styles from './TextEditor.module.css';
import { useSelector} from 'react-redux';

const TextEditor = ({editorSelector, onChange, onCancel}) => {
    //getData
    const {label, pre, placeholder, filterValue, type, width} = useSelector(editorSelector);
    //state
    const [isEmpty, setEmpty] = useState(!filterValue);
    //handlers
    const handleCancel = (event) => {
        console.log('handleCancel');
        setEmpty(true);
        onCancel();
    }
    const handleInput = (event) => {
        const textValue = event.target.value;
        console.log('handleInput', textValue);
        setEmpty(!textValue);
        onChange(textValue);
    }
    const btnClass = isEmpty ? styles.cancel  + ' ' +  styles.empty : styles.cancel;
    const btnCancel = type !== 'date' ? <input type="button" className={btnClass} onClick={handleCancel}/> : '';
    return (
        <div className={styles.textEditor}>
            <label className={styles.label}>{label}</label>
            <div className={styles.text_input} style={{width:width}}>
            <div className={styles.pre}>{pre}</div>
            <input type = {type} className={styles.field} placeholder={placeholder} onInput={handleInput} value={filterValue}/>
            {btnCancel}
            </div>
        </div>
    );
  }
  export default TextEditor;
