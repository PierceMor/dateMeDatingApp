import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header.js';
// import Home from './pages/Home.js';
// import CreateProfile from './pages/CreateProfile.js';
// import Landing from './pages/Landing.js';
// import Settings from './pages/Settings.js';
// import Admin from './pages/Admin.js';
import Signin from './pages/SignIn.js';



class App extends Component {
  render(){
    return(
      <Router>
        <div>
          <div className="main">
            <Header />
            {/* 
            <Route exact path="/" component={Home} />
            <Route exact path="/CreateProfile" component={CreateProfile} />
            <Route exact path="/Landing" component={Landing} />
            <Route exact path="/Admin" component={Admin} />
            <Route exact path="/Settings" component={Settings} />
            */}
            <Route exact path="/Signin" component={Signin} />
          </div>
        </div>
      </Router>
    )//return 
  }//render
} //App

export default App;
