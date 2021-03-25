import React, { Component } from 'react';
import Home from './pages/Home.js'
import Daily from './pages/Daily.js'
import Weekly from './pages/Weekly.js'
import Navbar from './components/Navbar.js'
import Wireframe from './pages/Wireframe.js'
import {
  BrowserRouter as Router,
  Route,
  // eslint-disable-next-line
  Switch,
  // eslint-disable-next-line
  Link
} from "react-router-dom";

class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route name="Home" exact path="/" component={Home} />
          <Route name="Daily" path="/daily" component={Daily} />
          <Route name="Weekly" path="/weekly" component={Weekly} />
          <Route name="Wireframe" path="/Wireframe" component={Wireframe} />
        </div>
      </Router>
    );
  }
}

export default Routes