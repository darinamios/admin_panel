import React from 'react';
import { useSelector} from 'react-redux';
import styles from './Table.module.css';
import DataRow from '../DataRow/DataRow';
import HeadRow from '../HeadRow/HeadRow';
import Footer from '../Footer/Footer';
import {getFilterPagingOrders} from '../../features/orders/ordersSlice';

const Table = () =>  {
    //get data
    const orderRows = useSelector(getFilterPagingOrders).map(order =>
        <DataRow key={order.id + order.hash} id={order.id}/>
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