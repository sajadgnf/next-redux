import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementCounter } from "../redux/counter/action";
import { wrapper } from "../redux/store";

const Counter = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch(incrementCounter())}>increment</button>
    </div>
  );
};

export default Counter;

