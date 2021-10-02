import React, { useEffect, useState } from "react";
import { Link, BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import LoginView from "./components/LoginView";
import NoteDetail from "./components/NoteDetail";
import NotesView from "./components/NotesView";
import noteService from "./services/notes";

const linkStyles = {
  paddingLeft: "10px",
};

const App = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    noteService.getAll().then((initialNotes) => {
      setNotes(initialNotes);
    });
  }, []);

  const Home = () => <div>Home</div>;

  const Users = () => <div>Users</div>;

  return (
    <BrowserRouter>
      <header>
        <Link to={"/"} style={linkStyles}>
          Home
        </Link>
        <Link to={"/notes"} style={linkStyles}>
          Notes
        </Link>
        <Link to={"/users"} style={linkStyles}>
          Users
        </Link>
        <Link to={"/login"} style={linkStyles}>
          Login
        </Link>
      </header>
      <Switch>
        <Route path="/notes/:noteId">
          <NoteDetail notes={notes} />
        </Route>
        <Route path="/notes">
          <NotesView />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route
          path="/login"
          render={() => {
            return user ? <Redirect to="/" /> : <LoginView />;
          }}
        />
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
