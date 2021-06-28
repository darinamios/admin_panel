import React from 'react';
import styles from './PageButton.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {
    activePageSelector,
} from '../../features/paging/pagingSlice';

const PageButton = ({index, clickPage}) => {
    //get data
    const activePage = useSelector(activePageSelector);
    const dispatch = useDispatch();
    //handlers
    const onClickHandler = (event) => {
        dispatch(clickPage(event.target.value));
    };
    console.log('activePage', activePage, index, index === activePage);
    const btnClass = (index.toString() !== activePage.toString() ? styles.button_inactive : styles.button_active);
    return (
        <div key={index} className ={styles.paging_button}>
            <input onClick={onClickHandler} type="button" className ={btnClass} value={index}/>
        </div>
    );
  }
  export default PageButton;