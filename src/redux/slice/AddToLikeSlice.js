import { createSlice } from "@reduxjs/toolkit";

const AddToLike = createSlice({
  name: "selectedItems",
  initialState: [],
  reducers: {
    selectItem: (state, action) => {
      state.push(action.payload);
    },
    removeItem: (state, action) => {
      let index = state.findIndex((item) => item.id == action.payload.id);
      state.splice(index, 1);
    },
  },
});

export const { selectItem, removeItem } = AddToLike.actions;

export default AddToLike.reducer;
