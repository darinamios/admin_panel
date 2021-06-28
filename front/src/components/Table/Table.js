import React from 'react';
import { useSelector} from 'react-redux';
import styles from './Table.module.css';
import DataRow from '../DataRow/DataRow';
import HeadRow from '../HeadRow/HeadRow';
import Footer from '../Footer/Footer';
import {getFormatedOrders} from '../../features/orders/ordersSlice';
import {changeCheckedForItem} from '../../features/actions/actionsSlice';

const Table = () =>  {
    //get data
    const orderRows = useSelector(getFormatedOrders).map(order =>
        <DataRow key={order.id + order.hash} id={order.id} order={order} checkItemHandler={changeCheckedForItem}/>
    );
    return (
       <div className={styles.frame}>
            <HeadRow/>
            <div className={styles.body}>
               {orderRows}
            </div>
           <Footer/>
        </div>
    );
  }
  export default Table;