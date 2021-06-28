import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

//set initial order array
const initialState = {
    orderSum: {filterValue: '', placeholder:'', pre:'', label:'Сумма заказа', type:'text', width:'280px'},
	orderPosition: {filterValue: '', placeholder:'', pre:'', label:'Позиций', type:'text', width:'280px'},
	orderClient:  {filterValue: '', placeholder:'', pre:'', label:'Клиент', type:'text', width:'280px'},
};
 
//slice with reducers
export const addSlice = createSlice({
	name: 'add',
	initialState,
	reducers: {
		setClient: (state, action) => {
			console.log('setClient', action.payload);
            state.orderClient.filterValue = action.payload;	
		},
        setSum: (state, action) => {
			state.orderSum.filterValue = action.payload;	
		},
        setPosition: (state, action) => {
			state.orderPosition.filterValue = action.payload;	
		},
        clearFields: (state) =>{
            state.orderClient.filterValue = '';
            state.orderSum.filterValue = '';
            state.orderPosition.filterValue = '';
        }
    }
});

//actions
export const { 
	setClient,
    setSum,
    setPosition,
    clearFields,
} = addSlice.actions;

//selectors
export const orderSumSelector = (state) => state.add.orderSum;
export const orderPositionSelector = (state) => state.add.orderPosition;
export const orderClientSelector = (state) => state.add.orderClient;
export const getOrderFields = createSelector(
    [orderSumSelector, orderPositionSelector, orderClientSelector],
	(sum, position, client) => {
		const order = {
            id : 0, 
            client: client.filterValue,
            date: Date.parse(new Date()),
            hash:'',
            status:'new',
            position:position.filterValue,
            sum: sum.filterValue
        };
		return order;
    }
  );

//reducer
export default addSlice.reducer;