import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import { getAllFilters, statusFilterSelector, statusesSelector } from '../filter/filterSlice';
import {activePageSelector, pageSizeSelector} from '../paging/pagingSlice';
import {sortedFieldSelector} from '../sort/sortSlice';

//set initial order array
const initialState = {
    ordersData: [
        {
            id : 1,
            hash:1,
            date: Date.parse('2020-08-06'),
            status:'resolved',
            position:1,
            sum:2000,
            client:'Pogorelskaya Darya'
        },
        {
            id : 2,
            hash:2,
            date: Date.parse('2020-01-07'),
            status:'postponed',
            position:1,
            sum:1000,
            client:'Pogorelskiy Alex'
        },
        {   
            id : 3,
            hash:3,
            date: Date.parse('2021-01-08'),
            status:'new',
            position:1,
            sum:1500,
            client:'Pogorelskiy Ilya'
        },
        {
            id : 4,
            hash:4,
            date: Date.parse('2020-08-06'),
            status:'resolved',
            position:1,
            sum:2000,
            client:'Pogorelskaya Darya'
        },
        {
            id : 5,
            hash:5,
            date: Date.parse('2020-01-07'),
            status:'postponed',
            position:1,
            sum:1000,
            client:'Pogorelskiy Alex'
        },
        {   
            id : 6,
            hash:6,
            date: Date.parse('2021-01-08'),
            status:'new',
            position:1,
            sum:1500,
            client:'Pogorelskiy Ilya'
        },
        {
            id : 7,
            hash:7,
            date: Date.parse('2020-08-06'),
            status:'resolved',
            position:1,
            sum:2000,
            client:'Pogorelskaya Darya'
        },
        {
            id : 8,
            hash:8,
            date: Date.parse('2020-01-07'),
            status:'postponed',
            position:1,
            sum:1000,
            client:'Pogorelskiy Alex'
        },
        {   
            id : 9,
            hash:9,
            date: Date.parse('2021-01-08'),
            status: 'new',
            position:1,
            sum:1500,
            client:'Pogorelskiy Ilya'
        },
        {
            id : 10,
            hash:10,
            date: Date.parse('2020-08-06'),
            status:'resolved',
            position:1,
            sum:2000,
            client:'Pogorelskaya Darya'
        },
        {
            id : 11,
            hash:11,
            date: Date.parse('2020-01-07'),
            status:'postponed',
            position:1,
            sum:1000,
            client:'Pogorelskiy Alex'
        },
        {   
            id : 12,
            hash:12,
            date: Date.parse('2021-01-08'),
            status:'new',
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
            name:"position"
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
    ] , 
    maxId : 12, 
    maxHash : 12   
  };
const getFormatDate = (date, delimiter) =>{
    const formatMap = [{day:'2-digit'}, {month:'2-digit'}, {year:'numeric'}]; 
    const format = (m) => new Intl.DateTimeFormat('en', m).format(date);
    return formatMap.map(format).join(delimiter);
}
//slice with reducers
export const ordersSlice = createSlice({
	name: 'orders',
	initialState,
	reducers: {
		addOrder: (state, action) => {
			const order = action.payload;
            state.maxId += 1;
            order.id = state.maxId;
            state.maxHash += 1;
            order.hash = state.maxHash;
			state.ordersData.push(order);
		},
        deleteOrders: (state, action) => {
			const orders = action.payload;
            const existsInSelected = (id) => {
                for(let ord of orders){
                   console.log(ord.toString() , id.toString());
                    if (ord.toString() === id.toString())
                        return true;
                }
                return false;
            };
            console.log('orders', orders);
            state.ordersData = state.ordersData.filter(item => !existsInSelected(item.id));
            console.log(state.ordersData);
		},
	},
});
//actions
export const { addOrder, deleteOrders } = ordersSlice.actions;
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

export const getSortedOrders = createSelector(
    [ordersSelector, sortedFieldSelector, statusesSelector],
    (orders, sortedField, statuses) => {
        const sorted =[].concat(orders);
        const {field, direction} = sortedField; 
        let first, second = 0;
        if(direction === 0){
            first = 1; second = -1;
        } else{
            first = -1; second = 1;
        };
        switch(field){
            case 'date':
                console.log('sort date');
                sorted.sort((a, b) => new Date(a.date) > new Date(b.date) ? first : second);
                return sorted;
            case 'status':
                console.log('sort status');
                sorted.sort((a, b) => statuses.get(a.status).text  > statuses.get(b.status).text ? first : second);
                return sorted;
            case 'position':
                console.log('sort position');
                sorted.sort((a, b) => a.position > b.position ? first : second);
                return sorted;
            case 'sum':
                console.log('sort sum');
                sorted.sort((a, b) => a.sum > b.sum ? first : second);
                return sorted;
            default:
                console.log('sort default');
                sorted.sort((a, b) => a.id > b.id ? first : second);
                return sorted;
        }                    
    }
 );
export const getFilteredOrders = createSelector(
    [getSortedOrders, getAllFilters, statusFilterSelector],
    (orders, filters, statuses) => {
        const hasStatus = (status, statuses) =>{
            if(statuses.length === 0) return true;
            for(let st of statuses){
                if(status === st) return true;
            }
            return false;
        }; 
        return  orders.filter(order => !filters["main"] ? order : order.hash.toString().includes(filters["main"]) 
                                                                ||order.client.includes(filters["main"]) )
                      .filter(order => !filters["sumFrom"] ? order : order.sum >= filters["sumFrom"])
                      .filter(order => !filters["sumTo"] ? order : order.sum <= filters["sumTo"])
                      .filter(order => !filters["dateFrom"] ? order : new Date(order.date) >= new Date(filters["dateFrom"]))
                      .filter(order => !filters["dateTo"] ? order : new Date(order.date) <= new Date(filters["dateTo"]))
                      .filter(order => hasStatus(order.status, statuses))
                      
    }
  );



export const getPagingOrders = createSelector(
    [getFilteredOrders, activePageSelector, pageSizeSelector],
    (orders, activePage, pageSize) => {
        const offset = (activePage - 1) * pageSize;
        return  orders.slice(offset, offset + pageSize);                      
    }
  );

  export const getActiveIds = createSelector(
    [getPagingOrders],
    (orders) => {
        return  orders.map(order => order.id);                      
    }
  );

  export const getFormatedOrders = createSelector(
    [getPagingOrders, statusesSelector],
    (orders, statuses) => {
        const formatted = [];
        for(let order of orders){
            formatted.push(
                {
                    id: order.id,
                    hash: order.hash,
                    date: getFormatDate(new Date(order.date), '.'),
                    status: statuses.get(order.status).text,
                    position: order.position,
                    sum: new Intl.NumberFormat().format(order.sum),
                    client: order.client
                }
            );
        }
        return formatted;                      
    }
  );
//reducer
export default ordersSlice.reducer;