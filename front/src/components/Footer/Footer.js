import React from 'react';
import styles from './Footer.module.css';
import Paging from '../Paging/Paging';
import { useSelector, useDispatch } from 'react-redux';
import {
    getPageCount,
    activePageSelector
} from '../../features/paging/pagingSlice';

const Footer = () => {
    //get data
    const pagesCount = useSelector(getPageCount);
    const activePage = useSelector(activePageSelector);
    //const dispatch = useDispatch(); 
    return (
        <div className={styles.footer}>
            Pages count {pagesCount}
            ActivePage {activePage}
            <Paging/>
        </div>
    );
  }
  export default Footer;