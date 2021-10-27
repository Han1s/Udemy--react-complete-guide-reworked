import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  shown: false,
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addItem(state, action) {
      console.log('add item');
      console.log(action);
      let updateFlag = false;
      state.items.forEach((item) => {
        if (action.title === item.title) {
          item.quantity += 1;
          updateFlag = true;
        }
        if (!updateFlag) {
          state.items.push({
            'title': action.title,
            'price': action.price,
            'quantity': 1
          })
        }
      })
    },
    removeItem(state, action) {
      console.log('remove item');
      console.log(action);
      return state;
    },
    toggle(state) {
      state.shown = !state.shown
    }
  }
})

const store = configureStore({
  reducer: cartSlice.reducer
})

export const cartActions = cartSlice.actions;

export default store;