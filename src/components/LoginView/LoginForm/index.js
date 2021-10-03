import React, { useState } from "react";
import PropTypes from "prop-types";
import { useManageError } from "../../../customHooks/useManageError";
import Notification from "../../Notification";

const LoginForm = ({ handleLogin, handleLogout }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { errorMessage, setError } = useManageError();

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await handleLogin(username, password, setError);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={username}
          placeholder="username"
          onChange={handleChangeUsername}
        />
        <input
          value={password}
          placeholder="password"
          onChange={handleChangePassword}
        />
        <button type="submit">Login</button>
      </form>
      <Notification message={errorMessage} />
    </div>
  );
};

LoginForm.displayName = "LoginForm";
LoginForm.propTypes = {
  setUser: PropTypes.func,
};

export default LoginForm;
