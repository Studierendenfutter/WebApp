import React from "react";
import "./BigButton.css";

export default function BigButton({ children, ...props }) {
  return (
    <button className="sf-big-button" {...props}>
      {children}
    </button>
  );
}
