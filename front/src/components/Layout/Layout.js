import React from 'react';
import styles from './Layout.module.css';
import Header from '../Header/Header';
import Table from '../Table/Table';
import headers from '../headers';
import Search from '../Search/Search';

function Layout() {
    return (
        <div className ={styles.layout}>
            <Header/>
            <Search placeholder="Номер заказа или ФИО"/>
            <Table headers={headers}></Table>
        </div>
    );
  }
  export default Layout;