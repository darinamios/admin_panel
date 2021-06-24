import React from 'react';
import styles from './Layout.module.css';
import Heading from '../Heading/Heading';
import Table from '../Table/Table';
import FilterBlock from '../FilterBlock/FilterBlock';

const Layout = () => {
    return (
        <div className ={styles.layout}>
            <Heading/>
            <FilterBlock/>
            <Table/>
        </div>
    );
  }
  export default Layout;