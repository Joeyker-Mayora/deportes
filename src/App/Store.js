import { configureStore } from "@reduxjs/toolkit";
import products from './SlicesProducts/SlicesProducts'
import cart, { getTotals } from './SlicesCart/SlicesCart'

export const store = configureStore({
    reducer: {
        products,
        cart
    },
   
});

store.dispatch(getTotals())