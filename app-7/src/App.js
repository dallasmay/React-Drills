import React, { useState } from "react";
import "./App.css";
import NewTask from "./Components/NewTask";
import List from "./Components/List";

function App() {
  const [taskList, setTaskList] = useState([]);

  const addTaskHandler = (task) => {
    setTaskList((prevTaskList) => {
      return [...prevTaskList, task];
    });
  };

  return (
    <div className="App">
      <h1>My to-do list:</h1>
      <NewTask onAddTask={addTaskHandler} />
      <List taskArr={taskList} />
    </div>
  );
}

export default App;
