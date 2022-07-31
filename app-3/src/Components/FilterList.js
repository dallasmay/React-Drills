import React, { useState } from "react";
import "./FilterList.css";

const FilterList = () => {
  const foods = [
    "spaghetti",
    "ice cream",
    "sushi",
    "bologna",
    "cheese",
    "pizza",
  ];

  const [dataState, setDataState] = useState(foods);
  const [userInput, setUserInput] = useState("");

//   const filterArr = () => {
//     let filteredArr = dataState.filter((food) => {
//       return food.includes(userInput);
//     });
//     console.log(filteredArr);
//     setDataState(filteredArr);
//   };

  return (
    <div className="container">
      <input
        type="text"
        className="userInput"
        onChange={(e) => {
            setUserInput(e.target.value);
            // filterArr();
        }}
      />
      {dataState.filter((food) => food.includes(userInput)).map((ele) => {
        return <h2>{ele}</h2>;
      })}
    </div>
  );
};

export default FilterList;
