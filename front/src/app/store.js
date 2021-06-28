import { configureStore } from '@reduxjs/toolkit';
import ordersReducer from '../features/orders/ordersSlice';
import filterReducer from '../features/filter/filterSlice';
import pagingReducer from '../features/paging/pagingSlice';
import actionsReducer from '../features/actions/actionsSlice';
import sortReducer from '../features/sort/sortSlice';
import addReducer from '../features/add/addSlice';

export const store = configureStore({
  reducer: {
    filter : filterReducer,
    orders : ordersReducer,
    paging : pagingReducer,
    actions : actionsReducer,
    sort : sortReducer,
    add : addReducer,
  }
})
