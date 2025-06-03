import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        filteredProducts: [],
    },
    reducers: {
        setFilteredProducts(state, action) {
            state.filteredProducts = action.payload;
        },
        clearFilteredProducts(state) {
            state.filteredProducts = [];
        },
    },
});

export const { setFilteredProducts, clearFilteredProducts } = filterSlice.actions;
export default filterSlice.reducer;
