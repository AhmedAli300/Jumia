import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    filteredProducts: [],
  },
  reducers: {
    setFilteredProducts: (state, action) => {
      state.filteredProducts = action.payload;
    },
    clearFilteredProducts: (state) => {
      state.filteredProducts = [];
    },
  },
});

export const { setFilteredProducts, clearFilteredProducts } = productsSlice.actions;
export default productsSlice.reducer;
