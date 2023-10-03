import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../slices/authSlice";
import columnsSlice from "../slices/columnSlice";
import modalSlice from "../slices/modalSlice";



export const store = configureStore({
  reducer: {
   
    [authSlice.name]: authSlice.reducer,
    [columnsSlice.name]: columnsSlice.reducer,
    [modalSlice.name]:modalSlice.reducer
  },
});
