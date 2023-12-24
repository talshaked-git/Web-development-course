import React, { useState } from "react";
import "./App6.css";

function App10() {
  const [name, setName] = useState("");
  const [headingText, setHeadingText] = useState("Hello");

  const handleClick = () => {
    setHeadingText(`Hello ${name}!`);
  };

  const handleMouseOver = (event) => {
    event.target.style.backgroundColor = "black";
  };

  const handleMouseOut = (event) => {
    event.target.style.backgroundColor = "";
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input onChange={handleChange} size="35" type="text" placeholder="What's your name?" />
      <button onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={handleClick}>
        Submit
      </button>
    </div>
  );
}

export default App10;
