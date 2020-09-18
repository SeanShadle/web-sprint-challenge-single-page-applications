import React from "react";
import {Switch, Route, Link} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Pizza from './components/Pizza'



export default function App(){
  return (
    <div className="home">
      <h1>Lambda Eats</h1>
      <p>Program your own pizza!</p>
      <div className="navigation">
        <Link to='/'>Home</Link>
        <Link to='/pizza'>Order</Link>
      </div>
      <div className="routes">
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/pizza'>
            <Pizza />
          </Route>
      </Switch>
      </div>
    </div>
  );
};
