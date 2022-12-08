import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addTodo } from "../modules/todo";

const FormBox = styled.form`
  width: 1200px;
  height: 50px;
  border: 1px solid green;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  margin-top: 10px;
`;

const InputForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [contents, SetContents] = useState("");

  const getTitleHandler = (event) => {
    setTitle(event.target.value);
  };
  const getContentsHandler = (event) => {
    SetContents(event.target.value);
  };
  const onClickHandler = (event) => {
    event.preventDefault();
    const payload = {
      id: Math.floor(Math.random() * 10000),
      title,
      contents,
      isDone: false,
    };
    dispatch(addTodo(payload));
  };

  return (
    <>
      <FormBox>
        <input onChange={getTitleHandler} type="text" name="title"></input>
        <input
          onChange={getContentsHandler}
          type-="text"
          name="contents"
        ></input>
        <button type="submit" onClick={onClickHandler}>
          추가하기
        </button>
      </FormBox>
    </>
  );
};
export default InputForm;
