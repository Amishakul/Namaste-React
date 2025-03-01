import { createSlice, current } from "@reduxjs/toolkit";


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
            const index = action.payload; // Expecting index
            if (index > -1 && index < state.items.length) {
                state.items.splice(index, 1);
            }
        },
        clearCart: (state, action) => {
            console.log(current(state));
            state.items.length = 0; // will make state i.e. items as [] -> empty array
        }

    }

});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;