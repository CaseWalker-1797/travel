import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const ShowContent = createSlice({
  name: "selectedItems",
  initialState,
  reducers: {
    storeData: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    // showItem: (state, action) => {
    //   state.items.push(action.payload);
    // },
  },
});

export const { storeData } = ShowContent.actions;

export default ShowContent.reducer;
