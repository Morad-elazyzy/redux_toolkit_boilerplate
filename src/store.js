import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counter/counterSlice";
import postSlice from "./features/posts/PostSlice";
const store = configureStore({
  reducer: {
    countState: counterSlice,
    postsState: postSlice,
  },
});
export default store;
