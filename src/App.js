import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  selectCount,
  incrementWithPrepare,
} from "./features/counter/counterSlice";
import {
  fetchPosts,
  selectAllPosts,
  selectStatus,
  selectError,
} from "./features/posts/PostSlice";
import PostItem from "./features/posts/PostItem";

function App() {
  const posts = useSelector(selectAllPosts);
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);
  // or use
  // const count = useSelector((state) => state.countState.count);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  useEffect(() => {
    console.log(posts);
    console.log(status);
  }, [posts, status]);
  let content;
  if ((status == "ideal") & (posts.length > 0)) {
    content = posts.map((post) => <PostItem post={post} key={post.userId} />);
  } else if (status === "loading") {
    content = <h2>"loading..."</h2>;
  } else if (status == "error") {
    content = <h2>{error} </h2>;
  }
  return <div className="app">{content} </div>;
}

export default App;
