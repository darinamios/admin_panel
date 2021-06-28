import React from 'react';
import {useDispatch} from 'react-redux';
import styles from './FilterPanel.module.css';
import {
    dateFromSelector, 
    dateToSelector,
    sumFromSelector,
    sumToSelector, 
    getStatusesWithChecked,
    getStatusesAsControl,
    changeStatus,
    setDateFrom,
    setDateTo,
    setSumFrom,
    setSumTo,
} from '../../features/filter/filterSlice';

import TextEditor from '../TextEditor/TextEditor';
import DropDown from '../DropDown/DropDown';

const FilterPanel = () => {
    const dispatch = useDispatch();
    const setDateFromHandler = (value) => {
        dispatch(setDateFrom(value));
    };
    const clearDateFromHandler = () => {
        dispatch(setDateFrom(''));
    };
    const setDateToHandler = (value) => {
        dispatch(setDateTo(value));
    };
    const clearDateToHandler = () => {
        dispatch(setDateTo(''));
    };
    const setSumFromHandler = (value) => {
        dispatch(setSumFrom(value));
    };
    const clearSumFromHandler = () => {
        dispatch(setSumFrom(''));
    };
    const setSumToHandler = (value) => {
        dispatch(setSumTo(value));
    };
    const clearSumToHandler = () => {
        dispatch(setSumTo(''));
    };
    return (
        <div className={styles.filterPanel}>
            <TextEditor editorSelector={dateFromSelector} onChange={setDateFromHandler} onCancel={clearDateFromHandler}/>
            <TextEditor editorSelector={dateToSelector} onChange={setDateToHandler} onCancel={clearDateToHandler}/>
            <DropDown listSelector={getStatusesWithChecked} textSelector={getStatusesAsControl} onChecked={changeStatus}/>
            <TextEditor editorSelector={sumFromSelector} onChange={setSumFromHandler} onCancel={clearSumFromHandler}/>
            <TextEditor editorSelector={sumToSelector} onChange={setSumToHandler} onCancel={clearSumToHandler}/>
            
        </div>
    );
  }
  export default FilterPanel;