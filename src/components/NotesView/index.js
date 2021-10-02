import React, { useState, useEffect } from "react";
import NoteForm from "./NoteForm";
import NotesList from "./NotesList";
import Toggable from "../Toggable";
import { useManageError } from "../../customHooks/useManageError";
import noteService from "../../services/notes";
import { LOCAL_STORAGE_KEYS } from "../../constants";

const Notes = ({ ...props }) => {
  const { errorMessage, setError } = useManageError();
  const [user, setUser] = useState(null);
  const [notes, setNotes] = useState([]);
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

  const addNote = (noteObject) => {
    noteService.create(noteObject, token).then((returnedNote) => {
      setNotes(notes.concat(returnedNote));
    });
  };

  if (!user) {
    return <div>User not logged</div>;
  }

  return (
    <>
      <h1>Notes</h1>
      <>
        <Toggable buttonLabel="New note">
          <NoteForm user={user} addNote={addNote} errorMessage={errorMessage} />
        </Toggable>
        <NotesList
          notes={notes}
          setError={setError}
          setNotes={setNotes}
          token={token}
        />
      </>
    </>
  );
};

Notes.displayName = "Notes";
// Notes.propTypes = {};

export default Notes;
