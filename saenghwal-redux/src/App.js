import React from "react";
// import { legacy_createStore as createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";
import store from "./store";
import { up, down } from "./counterSlice";

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => {
    return state.counter.value;
  });
  return (
    <div>
      <button
        onClick={() => {
          dispatch(up(2));
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(down(1));
        }}
      >
        -
      </button>
      {count}
    </div>
  );
}
export default function App() {
  return (
    <Provider store={store}>
      <div>
        <Counter></Counter>
      </div>
    </Provider>
  );
}
