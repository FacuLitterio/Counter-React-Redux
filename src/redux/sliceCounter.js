import { createSlice } from "@reduxjs/toolkit";

//Slices
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => void (state.count += 1),
    decrement: (state) => void (state.count -= 1),
    incrementBy: (state, action) => void (state.count += action.payload),
    decrementBy: (state, action) => void (state.count += action.payload),
  },
});

//Actions
export const {
  increment,
  decrement,
  incrementBy,
  decrementBy,
} = counterSlice.actions;

//Reducers
export default counterSlice.reducer;
