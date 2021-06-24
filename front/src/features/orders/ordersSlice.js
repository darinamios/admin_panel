import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import { getAllFilters } from '../filter/filterSlice';
import {activePageSelector, pageSizeSelector} from '../paging/pagingSlice';

//set initial order array
const initialState = {
    ordersData: [
        {
            id : 1,
            hash:'12345',
            date: '06/08/2020',
            status:'Выполнен',
            position:1,
            sum:2000,
            client:'Pogorelskaya Darya'
        },
        {
            id : 2,
            hash:'54321',
            date: '06/08/2020',
            status:'Отложен',
            position:1,
            sum:1000,
            client:'Pogorelskiy Alex'
        },
        {   
            id : 3,
            hash:'46241',
            date: '08/01/2021',
            status:'Новый',
            position:1,
            sum:1500,
            client:'Pogorelskiy Ilya'
        },
        {
            id : 4,
            hash:'12345',
            date: '06/08/2020',
            status:'Выполнен',
            position:1,
            sum:2000,
            client:'Pogorelskaya Darya'
        },
        {
            id : 5,
            hash:'54321',
            date: '06/08/2020',
            status:'Отложен',
            position:1,
            sum:1000,
            client:'Pogorelskiy Alex'
        },
        {   
            id : 6,
            hash:'46241',
            date: '08/01/2021',
            status:'Новый',
            position:1,
            sum:1500,
            client:'Pogorelskiy Ilya'
        },
        {
            id : 7,
            hash:'12345',
            date: '06/08/2020',
            status:'Выполнен',
            position:1,
            sum:2000,
            client:'Pogorelskaya Darya'
        },
        {
            id : 8,
            hash:'54321',
            date: '06/08/2020',
            status:'Отложен',
            position:1,
            sum:1000,
            client:'Pogorelskiy Alex'
        },
        {   
            id : 9,
            hash:'46241',
            date: '08/01/2021',
            status:'Новый',
            position:1,
            sum:1500,
            client:'Pogorelskiy Ilya'
        },
        {
            id : 10,
            hash:'12345',
            date: '06/08/2020',
            status:'Выполнен',
            position:1,
            sum:2000,
            client:'Pogorelskaya Darya'
        },
        {
            id : 11,
            hash:'54321',
            date: '06/08/2020',
            status:'Отложен',
            position:1,
            sum:1000,
            client:'Pogorelskiy Alex'
        },
        {   
            id : 12,
            hash:'46241',
            date: '08/01/2021',
            status:'Новый',
            position:1,
            sum:1500,
            client:'Pogorelskiy Ilya'
        },
    ],
    headers:
    [
        {
            text:"#",
            flex:"1",
            name:"hash"
        },
        {
            text:"Дата",
            flex:"3",
            name:"date"
        },
        {
            text:"Статус",
            flex:"3",
            name:"status"
        },
        {
            text:"Позиций",
            flex:"1",
            name:"positions"
        },
        {
            text:"Сумма",
            flex:"2",
            name:"sum"
        },
        {
            text:"ФИО покупателя",
            flex:"5",
            name:"client"
        }
    ]    
  };

//slice with reducers
export const ordersSlice = createSlice({
	name: 'orders',
	initialState,
	reducers: {
		addOrder: (state, action) => {
			const order = {
				date: new Date(),
                hash:'12345',
                status:'Новый',
                position:action.payload.position,
				sum: action.payload.sum,
				client: action.payload.client,
			};
			state.push(order);
		},
	},
});
//actions
export const { addOrder } = ordersSlice.actions;
//selectors
export const ordersSelector = (state) => state.orders.ordersData;
export const headersSelector = (state) => state.orders.headers;
export const getColumnsFlex = createSelector(
    [headersSelector],
    (headers) => {
        return  headers.reduce((acc, {name, flex}) => {
            if (name !== "id") 
                acc[name] = flex;
            return acc;
     },{})
    }
  );
export const getFilteredOrders = createSelector(
    [ordersSelector, getAllFilters],
    (orders, filters) => {
        return  orders.filter(order => !filters["main"] ? order : order.hash.includes(filters["main"]) 
                                                                ||order.client.includes(filters["main"]) )
                      .filter(order => !filters["sumFrom"] ? order : order.sum >= filters["sumFrom"])
                      .filter(order => !filters["sumTo"] ? order : order.sum <= filters["sumTo"])
                      
    }
  );

export const getFilterPagingOrders = createSelector(
    [getFilteredOrders, activePageSelector, pageSizeSelector],
    (orders, activePage, pageSize) => {
        const offset = (activePage - 1) * pageSize;
        return  orders.slice(offset, offset + pageSize);                      
    }
  );
//reducer
export default ordersSlice.reducer;