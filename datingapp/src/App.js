import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
// import Home from './pages/Home.js';
// import CreateProfile from './pages/CreateProfile.js';
// import Landing from './pages/Landing.js';
// import Settings from './pages/Settings.js';



class App extends Component {
  render(){
    return(
      <Router>
        <div>
          <div className="main">
            <Route exact path="/" component={Home} />
            <Route exact path="/CreateProfile" component={CreateProfile} />
            <Route exact path="/Landing" component={Landing} />
            <Route exact path="/Settings" component={Settings} />

          </div>
        </div>
      </Router>
    )//return 
  }//render
} //App

export default App;
