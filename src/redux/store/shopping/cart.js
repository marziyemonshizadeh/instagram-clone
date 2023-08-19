import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "cart",
  initialState: { cart: [], quantity: 0 },
  reducers: {
    AddCart: (state, action) => {
      state.cart.push(action.payload);
    },
  },
});
export const { AddCart } = slice.actions;
export default slice.reducer;
