import React from "react";

import "./Checkmark.css";

export default function Checkmark({ label, inputProps, onClick }) {
  return (
    <label class="sf-checkmark-container">
      <input type="sf-checkmark-checkbox" {...inputProps} onClick={onClick} />
      <span class="sf-checkmark-checkmark"></span>
      {label}
    </label>
  );
}
