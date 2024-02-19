import { createSlice } from "@reduxjs/toolkit";

const ShowContent = createSlice({
  name: "selectedItems",
  initialState: [],
  reducers: {
    showItem: (state, action) => {
      state.slice(action.payload,3);
    },
  },
});

export const { showItem } = ShowContent.actions;

export default ShowContent.reducer;
