import React from 'react';
// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// pages
import Home from './Home';
import About from './About';
import People from './People';
import Error from './Error';
import Person from './Person';
// navbar
import Navbar from './Navbar';


const ReactRouterSetup = () => {
  return (
    <Router>
      <Navbar />
      {/* Only the first one that matches will be displayed in a switch component */}
      <Switch>
        {/* The exact prop can be used to avoid repitition of url/path due to / or nesting */}
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/people">
          <People />
        </Route>
        <Route path="/person/:id" children={<Person />}>

        </Route>
        {/* The * in the path signifies that the path will always match [Mention this path last]*/}
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default ReactRouterSetup;
