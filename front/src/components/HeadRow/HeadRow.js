import React from 'react';
import styles from './HeadRow.module.css';

function HeadRow(props) {
    const {headers, columns} = props;
    const headerElements = headers.map(header =>
        <div key={header.name} className={styles.header_cell} style={{flex:columns[header.name]}}>{header.text}</div>
    );
    return (
        <div className={styles.header}>
            {headerElements}
        </div>
    );
  }
  export default HeadRow;