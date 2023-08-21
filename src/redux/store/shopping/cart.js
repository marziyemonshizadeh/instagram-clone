import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "cart",
  initialState: { cart: [], quantity: 0 },
  reducers: {
    AddCart: (state, action) => {
      state.cart.push(action.payload);
    },
    RemoveFromCart: (state, action) => {
      const indexOfId = state.cart.indexOf(action.payload);
      state.cart.splice(indexOfId, 1);
    },
    ClearAllItems: (state) => {
      state.cart = [];
    },
  },
});
export const { AddCart, RemoveFromCart, ClearAllItems } = slice.actions;
export default slice.reducer;
