import { addtodo, removetodo } from "../action";
import { ADD_TODO, REMOVE_TODO } from "../actiontypes";

test("should return an action with a payload to add a Todo", () => {
  const addt = addtodo({ id: 1, text: "Hello" });

  expect(addt).toEqual({
    type: ADD_TODO,
    payload: { id: 1, text: "Hello" }
  });
});

test("should return an action with a payload to add a Todo", () => {
  const addt = addtodo("Hello");

  expect(addt).toEqual({
    type: ADD_TODO,
    payload: { id: 0, text: "Hello" }
  });
});

test("should return an action with a payload to remove a Todo", () => {
  const removet = removetodo({ id: 1 });

  expect(removet).toEqual({
    type: REMOVE_TODO,
    payload: { id: 1 }
  });
});
