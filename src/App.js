import React, { useState, useEffect } from "react";
import NoteForm from "./components/NoteForm";
import LoginForm from "./components/LoginForm";
import { LOCAL_STORAGE_KEYS } from "./constants";
import NotesList from "./components/NotesList";
import noteService from "./services/notes";
import { useManageError } from "./customHooks/useManageError";
import Toggable from "./components/Toggable";

const App = () => {
  const [user, setUser] = useState(null);
  const [notes, setNotes] = useState([]);
  const { errorMessage, setError } = useManageError();
  const { token } = user ?? {};

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

  const addNote = (noteObject) => {
    noteService.create(noteObject, token).then((returnedNote) => {
      setNotes(notes.concat(returnedNote));
    });
  };

  return (
    <>
      <h1>Notes</h1>
      {user ? (
        <>
          <button type="button" onClick={handleLogout}>
            Logout
          </button>
          <Toggable buttonLabel="New note">
            <NoteForm
              user={user}
              addNote={addNote}
              errorMessage={errorMessage}
            />
          </Toggable>
          <NotesList
            notes={notes}
            setError={setError}
            setNotes={setNotes}
            token={token}
          />
        </>
      ) : (
        <Toggable buttonLabel={"Show login"}>
          <LoginForm setUser={setUser} />
        </Toggable>
      )}
    </>
  );
};

export default App;
