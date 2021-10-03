import React from "react";
import NoteForm from "./NoteForm";
import NotesList from "./NotesList";
import Toggable from "../Toggable";
import { useManageError } from "../../customHooks/useManageError";
import useUser from "../../customHooks/useUser";
import useNotes from "../../customHooks/useNotes";

const Notes = ({ ...props }) => {
  const { errorMessage, setError } = useManageError();
  const { user } = useUser();
  const { token } = user ?? {};
  const { notes, addNote, toggleImportanceOfNote } = useNotes(token);

  const toggleImportanceOf = (noteId) => {
    toggleImportanceOfNote(noteId).catch((error) => {
      setError(error);
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
          toggleImportanceOf={toggleImportanceOf}
          token={token}
        />
      </>
    </>
  );
};

Notes.displayName = "Notes";

export default Notes;
