import React from "react";

import "./RadioButton.css";

export default function RadioButton({ label, inputProps, onClick }) {
  return (
    <label className="sf-radio-button-container">
      <input
        type="sf-radio-button-checkbox"
        {...inputProps}
        onClick={onClick}
      />
      <span className="sf-radio-button-checkmark"></span>
      {label}
    </label>
  );
}
