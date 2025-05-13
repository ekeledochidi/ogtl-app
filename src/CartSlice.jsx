import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Array to store cart items
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload); // Add the item to the cart
    },
    removeItem: (state, action) => {
      // Remove the item by filtering out the matching one
      state.items = state.items.filter(
        (item) => item.category[0].topic !== action.payload.category[0].topic
      );
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;