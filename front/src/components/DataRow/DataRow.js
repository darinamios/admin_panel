import React from 'react';
import { useSelector} from 'react-redux';
import styles from './DataRow.module.css';
import {getColumnsFlex, ordersSelector} from '../../features/orders/ordersSlice';

const DataRow = ({id}) => {
    //get data
    const columnsFlex = useSelector(getColumnsFlex);
    const filteredOrders = useSelector(ordersSelector).filter(val => val.id === id);
    const cells = Object.entries(filteredOrders[0]).map(([key, value]) => {
        return (
            key !== "id" ? <div key = {key} className={styles.header_cell} style={{flex:columnsFlex[key]}}>{value}</div> : ''
        );
    });
    return (
        <div key = {'row' + id} className={styles.row}>
          {cells}
        </div>
    );
  }
  export default DataRow;