import React, { useState } from "react";

export default function AdminLogin({ onSubmit }) {
  const [password, setPassword] = useState();

  const catchSubmit = (e) => {
    e.preventDefault();
    onSubmit({ password });
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={catchSubmit}>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
