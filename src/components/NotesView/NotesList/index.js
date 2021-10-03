import React, { useState } from "react";
import PropTypes from "prop-types";
import NotesListItem from "./NotesListItem";

const NotesList = ({ notes, toggleImportanceOf, setError, token }) => {
  const [showAll, setShowAll] = useState(true);
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
