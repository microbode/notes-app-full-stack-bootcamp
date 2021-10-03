import { useState, useEffect } from "react";
import noteService from "../services/notes";

const useNotes = (token) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    noteService.getAll().then((initialNotes) => {
      setNotes(initialNotes);
    });
  }, [setNotes]);

  const toggleImportanceOfNote = (noteId) => {
    const note = notes.find((n) => n.id === noteId);
    const changedNote = { ...note, important: !note.important };
    noteService
      .update(noteId, changedNote, token)
      .then((returnedNote) => {
        setNotes(notes.map((note) => (note.id !== noteId ? note : returnedNote)));
      })
  };

  const addNote = noteObject => {
    noteService.create(noteObject, token).then((returnedNote) => {
      setNotes(notes.concat(returnedNote));
    });
  };

  return {
    notes,
    addNote,
    toggleImportanceOfNote
  }
};

export default useNotes;