import React, { useState } from "react";

const NewTask = (props) => {
//   const [todoList, setTodoList] = useState([]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // setTodoList((prevListState) => {
        //   return [...prevListState, e.target.todo.value];
        // });
        props.onAddTask(e.target.todo.value);
        e.target.todo.value = "";
      }}
    >
      <input type="text" name="todo" placeholder="Enter new task" />
      <button type="submit">Add</button>
    </form>
  );
};

export default NewTask;
