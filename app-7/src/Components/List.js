import React from "react";
import Todo from "./Todo";

const List = (props) => {
  const { taskArr } = props;
  return taskArr.map((ele, index) => {
    return <Todo key={index} task={ele} />;
  });
};

export default List;
