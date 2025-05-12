import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [], // Initialize items as an empty array
        countItems: 0
    },
    reducers: {
        addItem: (state, action) => {
            const { topic, image, description } = action.payload;
            const existingItem = state.items.find(item => item.topic === topic);
            if (existingItem) {
                existingItem.quantity ++;
            } else {
                state.items.push({ topic, image, description, quantity: 1 });
            }
            state.countItems += 1;
        },
        removeItem: (state, action) => {
            const cartitem = state.items.find(item => item.topic === action.payload);
              if (cartitem) {
                state.countItems -= cartitem.quantity;
              }
              state.items = state.items.filter(item => item.topic !== action.payload);
          },
          updateQuantity: (state, action) => {
            const { topic, quantity } = action.payload;
            const itemToUpdate = state.items.find(item => item.topic === topic);
            if (itemToUpdate) {
              itemToUpdate.quantity = quantity;
            }
          },
    },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;