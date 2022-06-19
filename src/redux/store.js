import { configureStore, createReducer } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },

});

