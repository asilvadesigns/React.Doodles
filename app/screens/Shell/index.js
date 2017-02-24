import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  hashHistory
} from 'react-router-dom';
//import cx from 'classNames';
//import sx from './styles.scss';

class Shell extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/typography">Typography</Link></li>
          </ul>
          <hr/>
          <Route component={Home} exact path="/"></Route>
          <Route component={About} path="/about">about</Route>
          <Route component={Typography} path="/typography">typography</Route>
        </div>
      </Router>
    )
  }
}

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Typography = () => (
  <div>
    <h2>Typography</h2>
  </div>
)

export default Shell;
