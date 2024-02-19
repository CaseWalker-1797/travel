import { configureStore } from "@reduxjs/toolkit";
import AddToLikeSlice from "../slice/AddToLikeSlice";
import ShowContentSlice from "../slice/ShowContentSlice";

const reducer = {
  addLike: AddToLikeSlice,
  showContent: ShowContentSlice,
};

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export default store;
