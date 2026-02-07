import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../features/counter/counterSlice";
import type { RootState } from "../store";
import Button from "../components/Button";
import { useState } from "react";

const About = () => {
  const navigate = useNavigate();
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: "20px" }}>
      <h1>关于我们</h1>
      <h1>Count: {count}</h1>
      <Button onClick={() => dispatch(increment())}>
        increase count value
      </Button>
      <Button onClick={() => dispatch(decrement())}>
        decrease count value
      </Button>
      <button onClick={() => navigate(-1)}>返回上一页</button>
      <br />
      <Link to="/">返回首页</Link>
    </div>
  );
};

export default About;
