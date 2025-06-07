import cartSlice from "./slices/cartSlice";
import { configureStore } from "@reduxjs/toolkit";

const reducer = {
  cart: cartSlice,
};

const store = configureStore({
  reducer,
});

export default store;
