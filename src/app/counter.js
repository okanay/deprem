import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "bg-blue-400",
};

const value = createSlice({
  name: "value",
  initialState,
  reducers: {
    changeValue: (state, action) => {
      state.value = action.payload;
    },
    darkMode: (state, action) => {
      console.log(state.value);
      console.log("bg-gray-900");

      state.value = "bg-gray-900";
    },
  },
});

export const { changeValue, darkMode } = value.actions;
export default value.reducer;
