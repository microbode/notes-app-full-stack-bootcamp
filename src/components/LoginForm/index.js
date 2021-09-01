import React, { useState } from "react";
import PropTypes from "prop-types";
import { useManageError } from "../../customHooks/useManageError";
import { login } from "../../services/login";
import Notification from "../Notification";
import { LOCAL_STORAGE_KEYS } from "../../constants";

const LoginForm = ({ setUser }) => {
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
    const user = await login({ username, password }, setError);
    if (user) {
      setUser(user);
      window.localStorage.setItem(
        LOCAL_STORAGE_KEYS.loggedUser,
        JSON.stringify(user)
      );
    }
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
