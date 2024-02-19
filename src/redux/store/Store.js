import { configureStore } from "@reduxjs/toolkit";
import AddToLikeSlice from "../slice/AddToLikeSlice";
import { combineReducers } from "@reduxjs/toolkit";
import storage from '@react-native-async-storage/async-storage';
import { persistReducer } from "redux-persist";
import { version } from "react";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const reducer = combineReducers({
  addLike: AddToLikeSlice,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
});

export default store;