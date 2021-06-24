import React from 'react';
import styles from './FilterPanel.module.css';
import {
    dateFromSelector, 
    dateToSelector,
    sumFromSelector,
    sumToSelector, 
    setDateFrom,
    clearDateFrom,
    setDateTo,
    clearDateTo,
    setSumFrom,
    clearSumFrom,
    setSumTo,
    clearSumTo
} from '../../features/filter/filterSlice';

import TextEditor from '../TextEditor/TextEditor';

const FilterPanel = () => {
    return (
        <div className={styles.filterPanel}>
            <TextEditor editorSelector={dateFromSelector} onChange={setDateFrom} onCancel={clearDateFrom}/>
            <TextEditor editorSelector={dateToSelector} onChange={setDateTo} onCancel={clearDateTo}/>
            <TextEditor editorSelector={sumFromSelector} onChange={setSumFrom} onCancel={clearSumFrom}/>
            <TextEditor editorSelector={sumToSelector} onChange={setSumTo} onCancel={clearSumTo}/>
        </div>
    );
  }
  export default FilterPanel;