import React from "react";
import NoteForm from "./components/NoteForm";
import LoginForm from "./components/LoginForm";

const App = () => {
  return (
    <>
      <h1>Notes</h1>
      <LoginForm />
      <NoteForm />
    </>
  );
};

export default App;
