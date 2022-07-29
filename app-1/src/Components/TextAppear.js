import React, { useState } from "react";
import "./TextAppear.css";

const TextAppear = () => {
  const [userInput, setUserInput] = useState("");
//   const [magicOutput, setMagicOutput] = useState("");


  return (
    <div className="wrapper">
      <div className="container" id="test">
        <input
          type="text"
          className="input"
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
        />
      </div>
      <p className="output">{userInput}</p>
    </div>
  );
};

export default TextAppear;
