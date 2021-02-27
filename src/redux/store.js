import { configureStore } from "@reduxjs/toolkit";

//Reducer
import counterReducer from "./sliceCounter";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
  devTools: true,
});
