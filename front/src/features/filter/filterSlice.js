import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

//set initial order array
const initialState = {
    mainFilter: {filterValue: '', placeholder:'Номер заказа или ФИО', pre:'', label:'', type:'text', width:'256px'},
	dateFrom: {filterValue: '', placeholder:'dd/mm/yyyy', pre:'с', label:'Дата оформления', type:'date', width:'142px'},
	dateTo:  {filterValue: '', placeholder:'dd/mm/yyyy', pre:'по', label:'', type:'date', width:'142px'},
	sumFrom: {filterValue: '', placeholder:'', pre:'от', label:'Сумма заказа', type:'text', width:'142px'},
	sumTo:  {filterValue: '', placeholder:'', pre:'до', label:'', type:'text', width:'142px'},
	statusFilter: []
  };
  const statuses = new Map([
    ['new', {text:'Новый', style:'new'}],
    ['calculated', {text:'Рассчет', style:'calc'}],
    ['approved', {text:'Подтвержден', style:'approve'}],
    ['postponed', {text:'Отложен', style:'new'}],
    ['resolved', {text:'Выполнен', style:'resolve'}],
    ['canceled', {text:'Отменен', style:'cancel'}]
  ]);
const hasStatus = (status, statuses) =>{
	for(let st of statuses){
		if(status === st) return true;
	}
	return false;
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
		setDateTo:(state, action) =>{
			state.dateTo.filterValue = action.payload;
		}, 
		setSumFrom:(state, action) =>{
			state.sumFrom.filterValue = action.payload;
		}, 
		setSumTo:(state, action) =>{
			state.sumTo.filterValue = action.payload;
		}, 
		changeStatus:(state, action) =>{
			const status = action.payload;
			if(hasStatus(status, state.statusFilter)){
				state.statusFilter = state.statusFilter.filter(st => st !== status);
			} else {
				state.statusFilter.push(status);
			};
		},
		clearAllFilters:(state) =>{
			state.mainFilter.filterValue = '';
			state.dateFrom.filterValue = '';
			state.dateTo.filterValue = '';
			state.sumFrom.filterValue = '';
			state.sumTo.filterValue = '';
			state.statusFilter = [];
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
	changeStatus,
	clearAllFilters,
} = filterSlice.actions;

//selectors
export const mainFilterSelector = (state) => state.filter.mainFilter;
export const dateFromSelector = (state) => state.filter.dateFrom;
export const dateToSelector = (state) => state.filter.dateTo;
export const sumFromSelector = (state) => state.filter.sumFrom;
export const sumToSelector = (state) => state.filter.sumTo;
export const statusesSelector = () => statuses;
export const statusFilterSelector = (state) => state.filter.statusFilter;
export const getStatusesWithChecked = createSelector(
    [statusesSelector, statusFilterSelector],
	(statuses, checked) => {
		const filteredStatuses = [];
		let i = -1;
		statuses.forEach((value, key) => {
			filteredStatuses[++i] = {key:key, text:value.text, checked: hasStatus(key, checked)};
		  });
		return filteredStatuses;
    }
  );
  export const getCheckedStatusesAsString = createSelector(
    [statusesSelector, statusFilterSelector],
	(statuses, checked) => {
		let checkedStatuses = '';
		statuses.forEach((value, key) => {
			checkedStatuses += hasStatus(key, checked)? value.text  + ' ': '' ;
		  });
		return !checkedStatuses ? 'Любой' : checkedStatuses;
    }
  );
  export const getStatusesAsControl = createSelector(
	[getCheckedStatusesAsString],
	(text) => {
		return {text: text, label:'Статус заказа'};
	}
  )

export const getAllFilters = createSelector(
    [mainFilterSelector, 
	dateFromSelector,
	dateToSelector,
	sumFromSelector,
	sumToSelector
	],
    (main, dateFrom, dateTo, sumFrom, sumTo) => {
		const filters = [];
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