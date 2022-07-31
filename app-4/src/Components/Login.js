import React, { useState } from "react";

const Login = () => {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  return (
    <div className="container">
      <form className="login-form">
        <input
          type="text"
          className="username"
          placeholder="username"
          onChange={(e) => setUsernameInput(e.target.value)}
        />
        <input
          type="text"
          className="password"
          placeholder="password"
          onChange={(e) => setPasswordInput(e.target.value)}
        />
        <button
          className="submit"
          type="submit"
          onClick={() =>
            alert(`Username: ${usernameInput} Password: ${passwordInput}`)
          }
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
