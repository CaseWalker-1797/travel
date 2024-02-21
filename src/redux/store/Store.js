import { configureStore } from "@reduxjs/toolkit";
import AddToLike from "../slice/AddToLikeSlice";
import { combineReducers } from "@reduxjs/toolkit";
import storage from '@react-native-async-storage/async-storage';
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const reducer = combineReducers({
  addLike: AddToLike,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
});

export default store;