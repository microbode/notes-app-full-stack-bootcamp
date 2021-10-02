import React, { useEffect, useState } from "react";
import Toggable from "../Toggable";
import LoginForm from "../LoginView/LoginForm";
import { LOCAL_STORAGE_KEYS } from "../../constants";

const LoginView = ({ ...props }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userFromLocalStorage = window.localStorage.getItem(
      LOCAL_STORAGE_KEYS.loggedUser
    );
    if (userFromLocalStorage) {
      const user = JSON.parse(userFromLocalStorage);
      setUser(user);
    }
  }, []);

  const handleLogout = () => {
    setUser(null);
    window.localStorage.removeItem(LOCAL_STORAGE_KEYS.loggedUser);
  };

  if (user) {
    return (
      <>
        <div>User is logged</div>;
        <button type="button" onClick={handleLogout}>
          Logout
        </button>
      </>
    );
  }

  return (
    <Toggable buttonLabel={"Show login"}>
      <LoginForm setUser={setUser} />
    </Toggable>
  );
};

LoginView.displayName = "LoginView";

export default LoginView;
