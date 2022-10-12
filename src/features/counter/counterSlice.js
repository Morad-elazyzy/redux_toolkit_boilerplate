import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  count: 0,
};
const getAsyncData = createAsyncThunk("data/getData", async () => {
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.data);
});
const counterSlice = createSlice({
  name: "countSlice",
  initialState,
  reducers: {
    increment: (state, action) => {
      return { count: state.count + action.payload };
    },
    incrementWithPrepare: {
      prepare: (arg) => {
        const num = 3 + arg;
        return { payload: num };
      },
      reducer: (state, action) => {
        return { count: state.count + action.payload };
      },
    },
  },
});

export const { increment, incrementWithPrepare } = counterSlice.actions;
export default counterSlice.reducer;
export const selectCount = (state) => state.countState.count;
