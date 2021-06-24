import React from 'react';
import styles from './Paging.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {
    setActivePage,
    activePageSelector,
    getPageNumbers
} from '../../features/paging/pagingSlice';

const Paging = () => {
    //get data
    const activePage = useSelector(activePageSelector);
    const pageNumbers = useSelector(getPageNumbers);
    const dispatch = useDispatch();
    //handlers
    const onClickHandler = (event) => {
        dispatch(setActivePage(event.target.value));
    };
    console.log('activePage', activePage);
    const pages = pageNumbers.map(index =>(
        <div key={index} className ={styles.paging_button}>
            <input onClick={onClickHandler} type="button" className ={index !== activePage ? styles.button_inactive : styles.button_active} value={index}/>
        </div>
    )
    );
    return (
        <div className={styles.paging}>
            Pages
            {pages}
        </div>
    );
  }
  export default Paging;