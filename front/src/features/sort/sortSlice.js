import { createSlice } from '@reduxjs/toolkit';

//set initial order array
const initialState = {
    sortedField: {field:"id", direction:0}
  };

//slice with reducers
export const sortSlice = createSlice({
	name: 'sort',
	initialState,
	reducers: {
		setSort: (state, action) => {
			const {field} = action.payload;
            let direction = 0;
            if (state.sortedField.field === field){
                direction = !state.sortedField.direction;
            }
            state.sortedField = {field, direction};
		},
	},
});

//actions
export const { 
	setSort, 
} = sortSlice.actions;

//selectors
export const sortedFieldSelector = (state) => state.sort.sortedField;
//reducer
export default sortSlice.reducer;