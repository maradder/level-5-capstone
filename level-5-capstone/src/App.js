import React, { Component, useState, setState } from "react";
import PersonList from "./PersonList";
import { FamilyContext } from "./family-context";
import useToggle from "./going-toggle-button";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const App = () => {
  const { value, toggle } = useToggle();
  const { isDay, setIsDay } = useState(true);
  const { greeting, setGreeting } = useState(
    isDay === true ? "Good Day" : "Good Night"
  );

  return (
    <div>
      <Router>
        <ul>
          <Link to="/people">Who</Link>
          <Link to="/places">Where</Link>
          <Link to="/time">When</Link>
        </ul>
        <Switch>
          <Route path="/people">
            <PersonList className="people" />
          </Route>
          <Route path="/places">
            <div className="places" />
          </Route>
          <Route path="/time">
            <div className="time" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
