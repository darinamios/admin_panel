import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import styles from './DataRow.module.css';
import {getColumnsFlex} from '../../features/orders/ordersSlice';
import {selectedItemsSelector} from '../../features/actions/actionsSlice';

const DataRow = ({id, order, checkItemHandler}) => {
    //get data
    const columnsFlex = useSelector(getColumnsFlex);
    const selectedOrders = useSelector(selectedItemsSelector);
    const dispatch = useDispatch();
    const handleChange = (event) =>{
        dispatch(checkItemHandler(event.target.name));
    };
    const isItemChecked = (id) =>{
        for(let st of selectedOrders){
            if(id.toString() === st.toString()) return true;
        }
        return false;
    };
    const cells = Object.entries(order).map(([key, value]) => {
        return (
            key !== "id" ? <div key = {key} className={styles.header_cell} style={{flex:columnsFlex[key]}}>{value}</div> : ''
        );
    });
    return (
        <div key = {'row' + id} className={styles.row}>
            <div key = "check" className={styles.header_cell} style={{flex:1}}> 
                <div className={styles.checkbox}>
                    <input className={isItemChecked(id)? styles.ico + ' ' +  styles.check: styles.ico} name={id} type="button" onClick= {handleChange}></input>
                </div>
            </div>
            {cells}
        </div>
    );
  }
  export default DataRow;