import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, selectCount } from "./features/counter/counterSlice";

function App() {
  const count = useSelector(selectCount);
  // or use
  // const count = useSelector((state) => state.countState.count);
  const dispatch = useDispatch();
  console.log(count);
  return (
    <div className="app" onClick={() => dispatch(increment(5))}>
      {count}{" "}
    </div>
  );
}

export default App;
