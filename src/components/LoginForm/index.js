import React, { useState } from "react";
// import PropTypes from "prop-types";
import { useManageError } from "../../customHooks/useManageError";
import { login } from "../../services/login";
import Notification from "../Notification";

const LoginForm = () => {
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
    await login({ username, password }, setError);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={username} onChange={handleChangeUsername} />
        <input value={password} onChange={handleChangePassword} />
        <button type="submit">Login</button>
      </form>
      <Notification message={errorMessage} />
    </div>
  );
};

LoginForm.displayName = "LoginForm";
LoginForm.propTypes = {};

export default LoginForm;
