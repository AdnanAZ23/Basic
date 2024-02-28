import React from "react";
import "./Box.css";

export const Box = ({ selectedNumber, setSelectedNumber, setError }) => {
  const arrNum = [1, 2, 3, 4, 5, 6];
  const numberHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };
  return (
    <div className="count">
      {arrNum.map((num, i) => (
        <div
          key={i}
          onClick={() => numberHandler(num)}
          className={selectedNumber === num ? "selected-box" : "box"}
        >
          {num}
        </div>
      ))}
    </div>
  );
};
