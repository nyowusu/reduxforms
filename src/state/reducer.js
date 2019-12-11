// import { ADD_TODO, REMOVE_TODO } from "./actiontypes";
import { handleActions } from "redux-actions";

const todos = [
  { id: 1, text: "Hello" },
  { id: 2, text: "Hey" },
  { id: 3, text: "Hi" }
];
const defaultState = {
  todos
};

export const reducer = handleActions(
  {
    ADD_TODO: (state, action) => ({
      todos: [...state.todos, action.payload]
    }),
    REMOVE_TODO: (state, action) => {
      return {
        todos: state.todos.filter(todo => todo.id !== action.payload.id)
      };
    }
  },
  defaultState
);
