import { configureStore } from "@reduxjs/toolkit";
import AddToLikeSlice from "../redux/AddToLikeSlice";

const reducer = {
  addLike: AddToLikeSlice,
};

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export default store;
