import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { detail } = useParams();
  const todo = useSelector((state) => state.todo).filter(
    (data) => +data.id === +detail
  )[0];

  return (
    <div>
      <h1>{todo.title}</h1>
      <p>{todo.contents}</p>
    </div>
  );
};

export default Detail;
