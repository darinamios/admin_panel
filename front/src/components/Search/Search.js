import React, { useState } from 'react';
import styles from './Search.module.css';
import { useSelector} from 'react-redux';

const Search = ({editorSelector, onChange, onCancel}) => {
    //get data
    const {filterValue, placeholder} = useSelector(editorSelector);
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
    return (
            <div className={styles.search}>
                <div className={styles.ico}></div>
                <input className={styles.field} placeholder={placeholder} onInput={handleInput} value={filterValue}/>
                <input type="button" className={btnClass} onClick={handleCancel}/>
            </div>
        );
};
export default Search;

