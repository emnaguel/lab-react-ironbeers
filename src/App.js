import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './Pages/Home'
import Beers from './Pages/Beers'
import RandomBeer from './Pages/RandomBeer'
import CreateBeer from './Pages/CreateBeer'
import BeerDetails from './Pages/BeerDetails'
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={Beers} />

        <Route exact path="/random" component={RandomBeer} />

        <Route
          exact
          path="/new"
          component={CreateBeer}
        />
        <Route
          exact
          path="/beers/:beerId"
          component={BeerDetails}
        />
      </Switch>
    </div>
  );
}

export default App;
