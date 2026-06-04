"use client";

import { useAppDispatch, useAppSelector } from "./redux/hooks/hooks";
import { increment, decrement } from "./redux/slicer/counterslic";

export default function Home() {
  const count = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => dispatch(increment())}>
        Increment
      </button>

      <button onClick={() => dispatch(decrement())}>
        Decrement
      </button>
    </div>
  );
}