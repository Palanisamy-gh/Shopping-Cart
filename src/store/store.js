import { configureStore } from "@reduxjs/toolkit";
import cartSice from "./slices/cartSice";

const store = configureStore({
  reducer: {
    cart: cartSice,
  },
});

export default store;
