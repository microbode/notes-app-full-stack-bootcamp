import React, { useState } from "react";
import NoteForm from "./components/NoteForm";
import LoginForm from "./components/LoginForm";

const App = () => {
  const [user, setUser] = useState(null);
  return (
    <>
      <h1>Notes</h1>
      {user ? <NoteForm user={user} /> : <LoginForm setUser={setUser} />}
    </>
  );
};

export default App;
