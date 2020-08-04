import React from "react";

import "./ProgressBar.css";

export default function ProgressBar({ percent = 0 }) {
  return (
    <div className="sf-progress-bar-wrapper">
      <label
        className="sf-progress-bar-label"
        style={{ marginLeft: percent / 2 + "%" }}
      >
        {percent.toFixed(0)} %
      </label>
      <div className="sf-progress-bar" style={{ width: percent + "%" }}></div>
    </div>
  );
}
