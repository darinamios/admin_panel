import React from 'react';
import styles from './HeadRow.module.css';
import {useSelector, useDispatch} from 'react-redux';
import {headersSelector} from '../../features/orders/ordersSlice';
import {changeHighCheck, selectedItemsSelector} from '../../features/actions/actionsSlice';
import {getActiveIds} from '../../features/orders/ordersSlice';
import {setSort} from '../../features/sort/sortSlice';

const HeadRow = () => {
    //get data
    const headers = useSelector(headersSelector);
    const selectedOrders = useSelector(selectedItemsSelector);
    const activeItems = useSelector(getActiveIds);
    const dispatch = useDispatch();
    const handleChange = (event) =>{
        dispatch(changeHighCheck(activeItems));
    };
    const handleColumnHeadClick = (event) =>{
        const field = event.target.name;
        dispatch(setSort({field:field, direction:"asc"}));
    };
    const isItemChecked = (id) =>{
        for(let st of selectedOrders){
            if(id.toString() === st.toString()) return true;
        }
        return false;
    };
    const headerCells = headers.map(header =>
        <div key={header.name} className={styles.header_cell} style={{flex:header.flex}}>
           <input type="button" className={styles.header_button} name={header.name} href='none' onClick={handleColumnHeadClick} value={header.text}/>
        </div>
    );
    return (
        <div className={styles.header}>
            <div key='main' className={styles.header_cell} style={{flex:1}}>
                <div className={styles.checkbox}>
                    <input className={isItemChecked(0)? styles.ico + ' ' +  styles.check: styles.ico} name="0" type="button" onClick= {handleChange}></input>
                </div>
            </div>
            {headerCells}
        </div>
    );
  }
  export default HeadRow;