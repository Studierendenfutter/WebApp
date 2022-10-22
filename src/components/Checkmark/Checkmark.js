import React from "react";

import "./Checkmark.css";

export default function Checkmark({ label, inputProps, onClick }) {
  return (
    <label className="sf-checkmark-container">
      <input type="sf-checkmark-checkbox" {...inputProps} onClick={onClick} />
      <span className="sf-checkmark-checkmark"></span>
      {label}
    </label>
  );
}
