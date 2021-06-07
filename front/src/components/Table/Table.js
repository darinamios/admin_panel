import React from 'react';
import styles from './Table.module.css';
import { useSelector } from 'react-redux';
import DataRow from '../DataRow/DataRow';
import HeadRow from '../HeadRow/HeadRow';
import Footer from '../Footer/Footer';

function Table(props) {
    const {headers} = props;
    const columns = Object.assign({}, ...headers.map(head => ({[head.name]: head.flex})));
    const orders = useSelector((state) => state.orders);
    const dataElements = orders.map(order =>
        <DataRow key={order.hash} hash={order.hash} dataObj={order} columns={columns}/>
    );
    return (
       <div className={styles.frame}>
            <HeadRow headers = {headers} columns={columns}/>
            <div className={styles.body}>
               {dataElements}
            </div>
           <Footer/>
        </div>
    );
  }
  export default Table;