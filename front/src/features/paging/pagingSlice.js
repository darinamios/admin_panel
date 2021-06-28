import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import { getFilteredOrders } from '../orders/ordersSlice';

//set initial order array
const initialState = {
    pageCount: 10,
	activePage: 1,
	pageSize: 10
  };

//slice with reducers
export const pagingSlice = createSlice({
	name: 'paging',
	initialState,
	reducers: {
		setActivePage: (state, action) => {
			state.activePage = action.payload;	
		},
        setDefailtPage: (state) => {
			state.activePage = 1;	
		},
	},
});

//actions
export const { 
	setActivePage,  
	setDefailtPage
} = pagingSlice.actions;

//selectors
export const activePageSelector = (state) => state.paging.activePage;
export const pageSizeSelector = (state) => state.paging.pageSize;
export const pagingSelector = (state) => state.paging;
export const getPageCount = createSelector(
    [pageSizeSelector],
    (size) => {
  		const count = Math.floor(12/size) + 1;
		return count;
    }
  );
  export const getPageNumbers = createSelector(
    [getPageCount],
    (count) => {
		const range = [];
		for(let i = 1; i <= count; ++i){
			range.push(i);
		}
		return range;
    }
  );
/*export const getPageCount = createSelector(
    [getFilteredOrders, pageSizeSelector],
    (orders, size) => {
        console.log(orders, orders.length);
		const count = Math.floor(orders.length/size) + 1;
		console.log(count);
		return count;
    }
  );*/
//reducer
export default pagingSlice.reducer;