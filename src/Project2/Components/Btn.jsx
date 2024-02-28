import React from "react";
import "./Btn.css";

export const Btn = ({ text, icon, isOutline, ...rest }) => {
  return (
    <button {...rest} className={isOutline ? "outline" : "primary"}>
      {icon} {text}
    </button>
  );
};
