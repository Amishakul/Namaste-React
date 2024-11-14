import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

// this reducer is our app's big reducer, and it consists of small reducers from different slices
const appStore = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

export default appStore;