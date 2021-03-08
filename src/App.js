import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About/About';
import Country from './components/Country/Country';
import Home from './components/Home/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Header></Header>
        </nav>

        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/countries">
            <Country />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
