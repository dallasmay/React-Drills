import React, { useState } from "react";
import "./App.css";
import Todo from "./Components/Todo";

function App() {
  const [todoList, setTodoList] = useState([]);
  let listArr;

  return (
    <div className="App">
      <h1>My to-do list:</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setTodoList([...todoList, e.target.todo.value]);
          e.target.todo.value = "";

        }}
      >
        <input type="text" name="todo" placeholder="Enter new task" />
        <button type="submit">Add</button>
      </form>
      {todoList.map((ele) => {
            return <Todo task={ele} />;
          })}
    </div>
  );
}

export default App;
