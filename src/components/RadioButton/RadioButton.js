import React from "react";

import "./RadioButton.css";

export default function RadioButton({ label, inputProps, onClick }) {
  return (
    <label class="sf-radio-button-container">
      <input
        type="sf-radio-button-checkbox"
        {...inputProps}
        onClick={onClick}
      />
      <span class="sf-radio-button-checkmark"></span>
      {label}
    </label>
  );
}
