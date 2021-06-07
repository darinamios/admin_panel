import { configureStore } from '@reduxjs/toolkit';
//mport counterReducer from '../features/counter/counterSlice';
import orderReducer from '../features/order/orderSlice';

export const store = configureStore({
  reducer: {
    //counter: counterReducer,
    orders: orderReducer,
  },
});
