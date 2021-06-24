import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

//set initial order array
const initialState = {
    mainFilter: {filterValue: '', placeholder:'Номер заказа или ФИО', pre:'', label:''},
	dateFrom: {filterValue: '', placeholder:'dd/mm/yyyy', pre:'с', label:'Дата оформления'},
	dateTo:  {filterValue: '', placeholder:'dd/mm/yyyy', pre:'по', label:''},
	sumFrom: {filterValue: '', placeholder:'', pre:'от', label:'Сумма заказа'},
	sumTo:  {filterValue: '', placeholder:'', pre:'до', label:''}
  };

//slice with reducers
export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setMainFilter: (state, action) => {
			state.mainFilter.filterValue = action.payload;	
		},
		clearMainFilter:(state) =>{
			state.mainFilter.filterValue = '';
		},
		setDateFrom:(state, action) =>{		
			state.dateFrom.filterValue = action.payload;
		}, 
		clearDateFrom:(state) =>{
			state.dateFrom.filterValue = '';
		},
		setDateTo:(state, action) =>{
			state.dateTo.filterValue = action.payload;
		}, 
		clearDateTo:(state) =>{
			state.dateTo.filterValue = '';
		},
		setSumFrom:(state, action) =>{
			state.sumFrom.filterValue = action.payload;
		}, 
		clearSumFrom:(state) =>{
			state.sumFrom.filterValue = '';
		},
		setSumTo:(state, action) =>{
			state.sumTo.filterValue = action.payload;
		}, 
		clearSumTo:(state) =>{
			state.sumTo.filterValue = '';
		}
	},
});

//actions
export const { 
	setMainFilter,  
	clearMainFilter,
	setDateFrom,  
	clearDateFrom,
	setDateTo,  
	clearDateTo,
	setSumFrom,  
	clearSumFrom,
	setSumTo,  
	clearSumTo,
} = filterSlice.actions;

//selectors
export const mainFilterSelector = (state) => state.filter.mainFilter;
export const dateFromSelector = (state) => state.filter.dateFrom;
export const dateToSelector = (state) => state.filter.dateTo;
export const sumFromSelector = (state) => state.filter.sumFrom;
export const sumToSelector = (state) => state.filter.sumTo;
export const getAllFilters = createSelector(
    [mainFilterSelector, 
	dateFromSelector,
	dateToSelector,
	sumFromSelector,
	sumToSelector
	],
    (main, dateFrom, dateTo, sumFrom, sumTo) => {
		const filters = [];
		/*const dt = new Date(dateFrom.filterValue);
		console.log('getAllFilters', dt);*/
		filters["main"] = main.filterValue;
		filters["dateFrom"] = dateFrom.filterValue;
		filters["dateTo"] = dateTo.filterValue;
		filters["sumFrom"] = sumFrom.filterValue;
		filters["sumTo"] = sumTo.filterValue;
        return  filters;
    }
  );

//reducer
export default filterSlice.reducer;