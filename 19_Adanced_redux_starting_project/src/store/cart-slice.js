import { createSlice } from "@reduxjs/toolkit";

createSlice({
  name: 'cart',
  initialState: {
    item: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id)
      if (!existingItem) {
        state.items.push({
          itemId: newItem.id,
          name: newItem.title,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price
        })
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }
    },
    removeItemFromCart() {

    }
  }
})