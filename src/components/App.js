import React from "react";
import "../styles/App.css";
import TodoList from "./TodoList";

function App({ chores }) {
  return (
    <>
      <TodoList chores={chores} />
    </>
  );
}

export default App;
