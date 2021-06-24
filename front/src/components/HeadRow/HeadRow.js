import React from 'react';
import styles from './HeadRow.module.css';
import {useSelector} from 'react-redux';
import {headersSelector} from '../../features/orders/ordersSlice';

function HeadRow() {
    //get data
    const headers = useSelector(headersSelector);
    const headerCells = headers.map(header =>
        <div key={header.name} className={styles.header_cell} style={{flex:header.flex}}>{header.text}</div>
    );
    return (
        <div className={styles.header}>
            {headerCells}
        </div>
    );
  }
  export default HeadRow;