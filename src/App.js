import React from 'react';
import './App.css';

import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Apod from './components/Apod';
import ItemDetail from './components/ItemDetail';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


export default class App extends React.Component  {
  render(){
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/images" component={About}/>
            <Route path="/apod" exact component={Apod}/>
            <Route path="/apod/:id" component={ItemDetail}/>
          </Switch>
        </div>
      </Router>
      
    );
  }
}

