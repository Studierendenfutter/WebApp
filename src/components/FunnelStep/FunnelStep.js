import React from "react";

import "./FunnelStep.css";

export default function FunnelStep({ title, children }) {
  return (
    <div>
      <h1 className="sf-funnel-step-title">{title}</h1>
      {children}
    </div>
  );
}
