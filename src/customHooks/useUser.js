import { useState, useEffect } from "react";
import { LOCAL_STORAGE_KEYS } from "../constants";
import { useHistory } from "react-router-dom";
import { login } from "../services/login";

const useUser = () => {
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

  const handleLogin = async (username, password, setError) => {
    const user = await login({ username, password }, setError);
    if (user) {
      setUser(user);
      window.localStorage.setItem(
        LOCAL_STORAGE_KEYS.loggedUser,
        JSON.stringify(user)
      );
      // history.push("/notes");
    }
  };

  return { user, handleLogin, handleLogout };
};

export default useUser;
