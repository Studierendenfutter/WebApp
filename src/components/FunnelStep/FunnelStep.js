import React from "react";

import "./FunnelStep.css";

export default function FunnelStep({ title, children }) {
  return (
    <div className="sf-funnel-step">
      <h1 className="sf-funnel-step-title">{title}</h1>
      {children}
    </div>
  );
}
