import { reducer } from "../reducer";
import { addtodo, removetodo } from "../action";
// const state = [
//     { id: 1, text: "Hello" },
//     { id: 2, text: "Hello" },
//     { id: 3, text: "Hello" }
//   ];
test("should add a new todo object to the state", () => {
  const state = { todos: [] };
  const addt = addtodo({ id: 1, text: "Hello" });
  const newState = reducer(state, addt);
  expect(newState).toEqual({ todos: [{ id: 1, text: "Hello" }] });
});

test("should remove a todo object from the state", () => {
  const currentState = {
    todos: [
      { id: 1, text: "Hello" },
      { id: 2, text: "Hello" },
      { id: 3, text: "Hello" }
    ]
  };

  const expectedState = {
    todos: [
      { id: 1, text: "Hello" },
      { id: 3, text: "Hello" }
    ]
  };

  const removet = removetodo({ id: 2 });
  const newState = reducer(currentState, removet);
  expect(newState).toEqual(expectedState);
});
