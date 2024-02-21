import { createSlice } from "@reduxjs/toolkit";

// const initialState = { items: [] };

const AddToLike = createSlice({
  name: "addLike",
  initialState: [],
  reducers: {
    selectItem: (state, action) => {
      // console.log("state.items ==> ", state);
      // console.log("action.payload ==> ", action.payload);
      // state.items = [...state.items, ...action.payload];
      state.push(action.payload);
    },
    removeItem: (state, action) => {
      // let newList = [...state.items];
      let index = state.findIndex((item) => item.id == action.payload.id);
      // if (index >= 0) state.splice(index, 1);
      // state = state.findIndex((item) => item.id == action.payload.id);
      // state.items = newList;
      state.splice(index, 1);
    },
  },
});

export const { selectItem, removeItem } = AddToLike.actions;

export const selectedItems = (state) => state.addLike;

export default AddToLike.reducer;
