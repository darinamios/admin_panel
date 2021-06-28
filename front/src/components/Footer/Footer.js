import React from 'react';
import styles from './Footer.module.css';
import Paging from '../Paging/Paging';
import { useSelector} from 'react-redux';
import {
    getSelectedItemsCount,
    selectedItemsSelector
} from '../../features/actions/actionsSlice';
import Button from '../Button/Button';

const Footer = () => {
    //get data
    const itemsCount = useSelector(getSelectedItemsCount);
    const items = useSelector(selectedItemsSelector);
    //const activePage = useSelector(activePageSelector);
    //const dispatch = useDispatch(); 
    const deleteOrders = () =>{
      console.log('deleteOrders', items);
    };
    return (
        <div className={styles.footer}>
          <div className={styles.left}>
            Выделено позиций {itemsCount}
            <Button text="Удалить" onClickHandler={deleteOrders} width = '128px'/>
          </div>
           <div className={styles.right}>
            <Paging/>
            </div>
        </div>
    );
  }
  export default Footer;