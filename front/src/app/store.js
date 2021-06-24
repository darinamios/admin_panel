import { configureStore } from '@reduxjs/toolkit';
import ordersReducer from '../features/orders/ordersSlice';
import filterReducer from '../features/filter/filterSlice';
import pagingReducer from '../features/paging/pagingSlice';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    orders : ordersReducer,
    paging : pagingReducer
  }
})
