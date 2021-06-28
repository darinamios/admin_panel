import React, { useState } from 'react';
import styles from './DropDown.module.css';
import { useSelector, useDispatch } from 'react-redux';


const DropDown = ({listSelector, textSelector, onChecked}) => {
    //get data
    const items = useSelector(listSelector);
    const {text, label} = useSelector(textSelector);
    const dispatch = useDispatch();
    //state
    const [isListOpen, setListOpen] = useState(false);
    const handleCancel = () =>{
        setListOpen(!isListOpen);
    };
    const handleChange = (event) =>{
        dispatch(onChecked(event.target.name));
    };
    const listClass = !isListOpen ? styles.DropDownList  + ' ' +  styles.closed : styles.DropDownList;
    const list = items.map(item =>(
        <div key={item.key} className={styles.item_row}>
            <div className={styles.checkbox}>
                <input className={item.checked ? styles.ico  + ' ' +  styles.check : styles.ico} name={item.key} type="button" onClick= {handleChange}></input>
            </div>
            <div className ={styles.item_name}> {item.text}</div>
        </div>
        )
    );
    return (
            <div>
            <div className={styles.DropDownEditor}>
                <label className={styles.label}>{label}</label>
                <div className={styles.text_input}>
                    <input readOnly={true} className={styles.field} value={text}/>
                    <input type="button" className={styles.choice} onClick={handleCancel}/>
                </div>
            </div>
            <div className={listClass}>
                {list}
            </div>
            </div>
        );
};
export default DropDown;

