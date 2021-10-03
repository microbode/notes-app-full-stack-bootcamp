import React from "react";
import Toggable from "../Toggable";
import LoginForm from "../LoginView/LoginForm";
import useUser from "../../customHooks/useUser";

const LoginView = ({ ...props }) => {
  const { user, handleLogin, handleLogout } = useUser();

  if (user) {
    return (
      <>
        <div>User is logged</div>
        <button type="button" onClick={handleLogout}>
          Logout
        </button>
      </>
    );
  }

  return (
    <Toggable buttonLabel={"Show login"}>
      <LoginForm handleLogin={handleLogin} handleLogout={handleLogout} />
    </Toggable>
  );
};

LoginView.displayName = "LoginView";

export default LoginView;
