import { configureStore } from "@reduxjs/toolkit";
import value from "./counter";

const store = configureStore({
  reducer: {
    value: value,
  },
});

export default store;
