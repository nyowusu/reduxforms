import React from "react";
import "./App.css";
import { Field, reduxForm } from "redux-form";
import { useSelector } from "react-redux";

function App() {
  const todos = useSelector(state => state.todos);

  return (
    <div className="container">
      <label htmlFor="todo">Add Another Todo: </label>
      <Field name="todo" component="input" id="todo" />
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default reduxForm({ form: "app" })(App);
