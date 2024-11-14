import { createSlice } from "@reduxjs/toolkit";


// cartSlice has some configurations-> object, 
// reducer -> object -> writing reducer functions corresponding to each action
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        //items: ["burger", "pizza"],
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            // mutating the state here: directly modifing the state over here
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.pop();
        },
        clearCart: (state, action) => {
            state.items.length = 0; // will make state i.e. items as [] -> empty array
        }

    }

});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;