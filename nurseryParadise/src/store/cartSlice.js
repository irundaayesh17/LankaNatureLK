import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        cartCount: 0
    },
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (!existingItem) {
                // If the item does not exist, add it to the cart with a quantity of 1
                state.items.push({ ...action.payload, quantity: 1 });
                state.cartCount += 1;
            }
        },
        incrementQuantity: (state, action) => {
            // Increment quantity if the item exists
            const existingItem = state.items.find(item => item.id === action.payload);
            if (existingItem) {
                existingItem.quantity += 1; // Increment quantity
                state.cartCount += 1;
            }
        },
        Descrement: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload);
            if (existingItem) {
                if (existingItem.quantity > 1) {
                    existingItem.quantity -= 1; // Decrement quantity if more than 1
                    state.cartCount -= 1;
                } else {
                    state.items = state.items.filter(item => item.id !== action.payload); // Remove item if quantity is 1
                    state.cartCount -= 1;
                }
            }
        },
        removeFromCart: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload); // Find the item
            if (existingItem) {
                state.cartCount -= existingItem.quantity; // Decrease cart count by the item's quantity
                state.items = state.items.filter(item => item.id !== action.payload); // Remove the item from the cart
            }
        }
    }
});

export const { addToCart, removeFromCart, Descrement,incrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
