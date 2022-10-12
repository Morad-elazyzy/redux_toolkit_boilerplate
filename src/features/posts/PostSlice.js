import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/postts"
  );
  return response.data;
});

const initialState = {
  posts: [],
  status: "ideal",
  error: null,
};

export const postSlice = createSlice({
  name: "postSlice",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "ideal";
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export default postSlice.reducer;
export const selectAllPosts = (state) => state.postsState.posts;
export const selectStatus = (state) => state.postsState.status;
export const selectError = (state) => state.postsState.error;
