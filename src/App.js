import React, { useEffect, useState } from "react";
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
import Search from "./components/Search/Search";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const url = "https://restcountries.eu/rest/v2/all";
    fetch(url)
      .then(response => response.json())
      .then(data => setCountries(data));
  }, []);

  return (
    <Router>
      <div>
        <nav>
          <Header search={setCountries}></Header>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/countries">
            <Country country={countries} />
          </Route>
          <Route exact path="/">
            <Home country={countries} />
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
