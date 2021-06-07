import { createSlice } from '@reduxjs/toolkit';

export const orderSlice = createSlice({
	name: 'orders',
	initialState: [
            {
                hash:'12345',
                date: '01/02/1999',
                status:'Выполнен',
                position:1,
                sum:2000,
                client:'Pogorelskaya Darya'
            },
            {
                hash:'54321',
                date: '06/08/2020',
                status:'Отложен',
                position:1,
                sum:1000,
                client:'Pogorelskiy Alex'
            },
            {
                hash:'46241',
                date: '08/01/2021',
                status:'Новый',
                position:1,
                sum:1500,
                client:'Pogorelskiy Ilya'
            },
        ],
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
export const { addOrder } = orderSlice.actions;
export default orderSlice.reducer;