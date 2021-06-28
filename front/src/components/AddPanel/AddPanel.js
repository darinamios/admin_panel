import React from 'react';
import styles from './AddPanel.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {
    setClient,
    setSum,
    setPosition,
    orderSumSelector,
    orderPositionSelector,
    orderClientSelector,
    getOrderFields
} from '../../features/add/addSlice';
import { addOrder } from '../../features/orders/ordersSlice';

import TextEditor from '../TextEditor/TextEditor';
import Button from '../Button/Button';

const AddPanel = ({onClose}) => {
    const dispatch = useDispatch();
    const setClientHandler = (value) =>{
        dispatch(setClient(value));
    };
    const clearClientHandler = () =>{
        dispatch(setClient(''));
    };
    const setSumHandler = (value) =>{
        dispatch(setSum(value));
    };
    const clearSumHandler = () =>{
        dispatch(setSum(''));
    };
    const setPositionHandler = (value) =>{
        dispatch(setPosition(value));
    };
    const clearPositionHandler = () =>{
        dispatch(setPosition(''));
    };
    const order = useSelector(getOrderFields);
    const addOrderHandler = () =>{
        console.log('addOrderHandler', order);
        dispatch(addOrder(order));
        onClose();
    };
    return (
        <div className ={styles.addPanel}>
            <div className={styles.head}>Заявка #</div>
            <div className={styles.body}>
                <div className={styles.field_row}>
                    <TextEditor editorSelector={orderClientSelector} onChange={setClientHandler} onCancel={clearClientHandler}/>
                </div>
                <div className={styles.field_row}>
                    <TextEditor editorSelector={orderSumSelector} onChange={setSumHandler} onCancel={clearSumHandler}/>
                </div>
                <div className={styles.field_row}>
                    <TextEditor editorSelector={orderPositionSelector} onChange={setPositionHandler} onCancel={clearPositionHandler}/>
                </div>
                <div className={styles.field_row}>
                    <Button text="Добавить заказ" onClickHandler={addOrderHandler} width = '128px'/>
                </div>
            </div>
        </div>
    );
  }
  export default AddPanel;
