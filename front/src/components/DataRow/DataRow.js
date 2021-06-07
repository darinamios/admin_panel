import React from 'react';
import styles from './DataRow.module.css';

function DataRow(props) {
    const {hash, dataObj, columns} = props;
    const cells = Object.entries(dataObj).map(([key, value]) => {
        return (
            <div key = {key} className={styles.header_cell} style={{flex:columns[key]}}>{value}</div>
        );
    });
    return (
        <div key = {hash} className={styles.row}>
           {cells}
        </div>
    );
  }
  export default DataRow;