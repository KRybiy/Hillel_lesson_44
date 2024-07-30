import { useDispatch, useSelector } from "react-redux";
import { decrementAsync, incrementAsync } from "../redux/actions";
import { selectCount } from "../redux/selectors";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { CounterAction, CounterState } from "../redux/types";

const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch<ThunkDispatch<CounterState, unknown, CounterAction>>();
  return (
    <div>
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={() => dispatch(incrementAsync())}>+</button>
      <button onClick={() => dispatch(decrementAsync())}>-</button>
    </div>
  );
};

export default Counter;