// src/redux/modules/counter.js

// Action Value
const Add_TODO = "ADD_TODO";
const DEL_TODO = "DEL_TODO";
const UPDATE_TODO = "UPDATE_TODO";

// Action Creator

export const addTodo = (payload) => {
  return {
    type: Add_TODO,
    payload,
  };
};
export const delTodo = (payload) => {
  return {
    type: DEL_TODO,
    payload,
  };
};
export const updateTodo = (payload) => {
  return {
    type: UPDATE_TODO,
    payload,
  };
};

// Initial State
const initialstate = [];
// Reducer

const todo = (state = initialstate, action) => {
  switch (action.type) {
    case Add_TODO:
      return [...state, action.payload];
    case DEL_TODO:
      const newData = state.filter((value) => {
        return value.id !== action.payload;
      });
      return newData;

    case UPDATE_TODO:
      const newDatas = state.map((value) => {
        return value.id === action.payload
          ? { ...value, isDone: !value.isDone }
          : value;
      });
      return newDatas;
    default:
      return state;
  }
};

export default todo;
