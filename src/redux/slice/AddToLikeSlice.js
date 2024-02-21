import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [] };

const AddToLike = createSlice({
  name: "addLike",
  initialState,
  reducers: {
    selectItem: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeItem: (state, action) => {
      let newList = [...state.items];
      let index = state.items.findIndex((item) => item.id == action.payload.id);
      if (index >= 0) state.splice(index, 1);
      state.items = newList;
    },
  },
});

export const { selectItem, removeItem } = AddToLike.actions;

export const selectedItems = (state) => state.addLike.items;

export default AddToLike.reducer;
