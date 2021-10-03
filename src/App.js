import React from "react";
import { Link, BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import LoginView from "./components/LoginView";
import NoteDetail from "./components/NoteDetail";
import NotesView from "./components/NotesView";
import useNotes from "./customHooks/useNotes";

const linkStyles = {
  paddingLeft: "10px",
};

const App = () => {
  const { notes } = useNotes();

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
        <Route path="/login">
          <LoginView />
        </Route>        
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
