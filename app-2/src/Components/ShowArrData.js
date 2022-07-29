import React, { useState } from "react";
import "./ShowArrData.css";

const ShowArrData = () => {
  const foods = [
    "spaghetti",
    "ice cream",
    "sushi",
    "bologna",
    "cheese",
    "pizza",
    "carrots"
  ];

  const [dataState, setDataState] = useState(foods);
  // let newArr = []
  // for (let i = 0; i < dataState.length; i++) {
  //     newArr.push(<h2>{dataState[i]}</h2>)
  // }
  // dataState.map((ele) => {
  //   return <h2>{ele}</h2>;
  // });

  return (
    <div className="container">
      {dataState.map((ele) => {
        return <h2>{ele}</h2>;
      })}
    </div>
  );
};

export default ShowArrData;
