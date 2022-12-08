import React from "react";
import CardDeck from "./CardDeck";
import { useSelector } from "react-redux";

const Contents = () => {
  const data = useSelector((state) => state.todo);

  return (
    <>
      <div>
        <h1>Working</h1>
        {data.map(
          (value) =>
            !value.isDone && (
              <CardDeck key={`main-todo-${value.id}`} data={value}></CardDeck>
            )
        )}
      </div>
      <div>
        <h1>Done</h1>
        {data.map(
          (value) =>
            value.isDone && (
              <CardDeck key={`main-done-${value.id}`} data={value}></CardDeck>
            )
        )}
      </div>
    </>
  );
};
export default Contents;
