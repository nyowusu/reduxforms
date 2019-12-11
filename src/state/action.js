import { ADD_TODO, REMOVE_TODO } from "./actiontypes";
import { createAction } from "redux-actions";

export const addtodo = createAction(ADD_TODO, obj => {
  if (typeof obj === "string") {
    return { id: 0, text: obj };
  } else return obj;
});
export const removetodo = createAction(REMOVE_TODO, index => index);
