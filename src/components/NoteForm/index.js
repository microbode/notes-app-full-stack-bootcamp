import React, { useState } from "react";
import PropTypes from "prop-types";
import Notification from "../Notification";

const NoteForm = ({ user, addNote, errorMessage }) => {
  const [newNote, setNewNote] = useState("");

  const handleNoteChange = event => {
    setNewNote(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5,
    };
    addNote(noteObject);
    setNewNote("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
      <Notification message={errorMessage} />
    </div>
  );
};

NoteForm.displayName = "NoteForm";
NoteForm.propTypes = {
  user: PropTypes.object,
  addNote: PropTypes.func,
  errorMessage: PropTypes.string
};

export default NoteForm;
