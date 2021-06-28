import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import {getActiveIds} from '../orders/ordersSlice';

//set initial order array
const initialState = {
    selectedItems: []
  };

const isItemChecked = (order, selectedItems) =>{
	for(let item of selectedItems){
		if(item === order) return true;
	}
	return false;
};
//slice with reducers
export const actionsSlice = createSlice({
	name: 'actions',
	initialState,
	reducers: {
		changeCheckedForItem: (state, action) => {
			const order = action.payload;
            if(isItemChecked(order, state.selectedItems)){
                state.selectedItems = state.selectedItems.filter(ord => ord !== order);
		    } else {
                state.selectedItems.push(order);
		    };	
		},
        changeHighCheck: (state, action) => {
			const activeItems = action.payload;
            if(isItemChecked(0, state.selectedItems)){
                state.selectedItems = [];
		    } else {
                state.selectedItems = [];
                state.selectedItems.push(0);
                for (let order of activeItems)
                    state.selectedItems.push(order);
		    };	
		},
	},
});

//actions
export const { 
	changeCheckedForItem, 
    changeHighCheck, 
} = actionsSlice.actions;

//selectors
export const selectedItemsSelector = (state) => state.actions.selectedItems;
export const getSelectedItemsCount = createSelector(
    [selectedItemsSelector],
    (items) => {
		return items.filter(id=> id.toString() !== '0').length;
    }
);
//reducer
export default actionsSlice.reducer;