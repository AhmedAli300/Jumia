import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCart, addToCart, updateCartItem, removeCartItem, clearCart } from '../../services/cartService';

// export const fetchCart = createAsyncThunk('cart/fetchCart', async () => {

//     const res = await getCart();
//     console.log('Cart data:', res.data.data.cart);
//     return res.data.data.cart;

// });

export const fetchCart = createAsyncThunk('cart/fetchCart', async () => {
    const res = await getCart();
    console.log('Cart data:', res.data.data.cart);
    console.log('Cart size:', res.data.size);
    return {
        cart: res.data.data.cart,
        size: res.data.size,
    };
});

export const addItem = createAsyncThunk('cart/addItem', async ({ productId, quantity }) => {
    await addToCart(productId, quantity);
    const res = await getCart();
    console.log('Cart data after adding item:', res.data.data.cart);
    // return res.data.data.cart;
    return {
        cart: res.data.data.cart,
        size: res.data.size,
    };
});

export const updateItem = createAsyncThunk('cart/updateItem', async ({ productId, quantity }) => {
    await updateCartItem(productId, quantity);
    const res = await getCart();
    // return res.data.data.cart;
    return {
        cart: res.data.data.cart,
        size: res.data.size,
    };
});

export const removeItem = createAsyncThunk('cart/removeItem', async (productId) => {
    console.log(`Deleting product with ID: ${productId}`);
    await removeCartItem(productId);
    const res = await getCart();
    console.log("Cart data:", res.data);
    // return res.data.data.cart;
    return {
        cart: res.data.data.cart,
        size: res.data.size,
    };
});

export const clearUserCart = createAsyncThunk('cart/clearUserCart', async () => {
    await clearCart();
    return null;
});

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        size: 0,
        loading: false,
        error: null,
    },
    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(fetchCart.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchCart.fulfilled, (state, action) => {
                state.loading = false;
                state.cart = action.payload.cart;
                state.size = action.payload.size;
            })
            .addCase(fetchCart.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(addItem.fulfilled, (state, action) => {
                state.cart = action.payload.cart;
                state.size = action.payload.size;
            })
            .addCase(updateItem.fulfilled, (state, action) => {
                state.cart = action.payload.cart;
                state.size = action.payload.size;
            })
            .addCase(removeItem.fulfilled, (state, action) => {
                state.cart = action.payload.cart;
                state.size = action.payload.size;
            })
            .addCase(clearUserCart.fulfilled, (state) => {
                state.cart = [];
                state.size = 0;
            });
    },
});

export default cartSlice.reducer;

