import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import NotesListItem from "./NotesListItem";
import noteService from "../../../services/notes";

const NotesList = ({ setNotes, notes, setError, token }) => {
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    noteService.getAll().then((initialNotes) => {
      setNotes(initialNotes);
    });
  }, [setNotes]);

  const toggleImportanceOf = (id) => {
    const note = notes.find((n) => n.id === id);
    const changedNote = { ...note, important: !note.important };
    noteService
      .update(id, changedNote, token)
      .then((returnedNote) => {
        setNotes(notes.map((note) => (note.id !== id ? note : returnedNote)));
      })
      .catch((error) => {
        setError(error);
      });
  };

  const notesToShow = showAll ? notes : notes.filter((note) => note.important);

  return (
    <div>
      <button onClick={() => setShowAll(!showAll)}>
        show {showAll ? "important" : "all"}
      </button>
      <ul>
        {notesToShow.map((note, i) => (
          <NotesListItem
            key={i}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        ))}
      </ul>
    </div>
  );
};

NotesList.displayName = "NotesList";
NotesList.propTypes = {
  notes: PropTypes.array,
  setError: PropTypes.func,
  setNotes: PropTypes.func,
  token: PropTypes.string,
};

export default NotesList;
