import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
    getCart,
    addToCart,
    updateCartItem,
    removeCartItem,
    clearCart,
} from '../../services/cartService';

export const fetchCart = createAsyncThunk('cart/fetchCart', async () => {
    const res = await getCart();
    return res.data.data.cart;

});

export const addItem = createAsyncThunk('cart/addItem', async ({ productId, quantity }) => {
    await addToCart(productId, quantity);
    const res = await getCart();
    return res.data.data.cart;
});

export const updateItem = createAsyncThunk('cart/updateItem', async ({ productId, quantity }) => {
    await updateCartItem(productId, quantity);
    const res = await getCart();
    return res.data.data.cart;
});

export const removeItem = createAsyncThunk('cart/removeItem', async (productId) => {
    await removeCartItem(productId);
    const res = await getCart();
    return res.data.data.cart;
});

export const clearUserCart = createAsyncThunk('cart/clearUserCart', async () => {
    await clearCart();
    return null;
});

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCart.pending, (state) => {
            state.loading = true;
        })
            .addCase(fetchCart.fulfilled, (state, action) => {
                state.loading = false;
                state.cart = action.payload;
            })
            .addCase(fetchCart.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(addItem.fulfilled, (state, action) => {
                state.cart = action.payload;
            })
            .addCase(updateItem.fulfilled, (state, action) => {
                state.cart = action.payload;
            })
            .addCase(removeItem.fulfilled, (state, action) => {
                state.cart = action.payload;
            })
            .addCase(clearUserCart.fulfilled, (state) => {
                state.cart = [];
            });
    },
});

export default cartSlice.reducer;
