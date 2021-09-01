import React, { useState, useEffect } from "react";
import NoteForm from "./components/NoteForm";
import LoginForm from "./components/LoginForm";
import { LOCAL_STORAGE_KEYS } from "./constants";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userFromLocalStorage = window.localStorage.getItem(LOCAL_STORAGE_KEYS.loggedUser);
    if (userFromLocalStorage) {
      const user = JSON.parse(userFromLocalStorage);
      setUser(user);
    }
  }, []);

  return (
    <>
      <h1>Notes</h1>
      {user ? <NoteForm user={user} setUser={setUser} /> : <LoginForm setUser={setUser} />}
    </>
  );
};

export default App;
