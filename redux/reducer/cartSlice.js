import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  cartDetails: null,
};

const cartSlice = createSlice({
  name: "member",
  initialState,
  reducers: {
    SetCart: (state, action) => {
      state.cartDetails = action.payload;
    },
  },
});

export const { SetCart } = cartSlice.actions;

export default cartSlice.reducer;
