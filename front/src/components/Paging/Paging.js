import React from 'react';
import styles from './Paging.module.css';
import { useSelector } from 'react-redux';
import {
    setActivePage,
    getPageNumbers
} from '../../features/paging/pagingSlice';
import PageButton from '../PageButton/PageButton';

const Paging = () => {
    //get data
    const pageNumbers = useSelector(getPageNumbers);
    const pages = pageNumbers.map(index =>(
        <PageButton key={index} index={index} clickPage={setActivePage}/>
        )
    );
    return (
        <div className={styles.paging}>
            {pages}
        </div>
    );
  }
  export default Paging;