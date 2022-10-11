import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};
const counterSlice = createSlice({
  name: "countSlice",
  initialState,
  reducers: {
    increment: (state, action) => {
      return { count: state.count + action.payload };
    },
  },
});

export const { increment } = counterSlice.actions;
export default counterSlice.reducer;
export const selectCount = (state) => state.countState.count;
