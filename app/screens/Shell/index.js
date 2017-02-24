import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  hashHistory
} from 'react-router-dom';
import About from '../About';
import Home from '../Home';
import cx from 'classNames';
import sx from './styles.scss';

class Shell extends Component {
  render() {
    return (
      <Router className={cx(sx.shell)}>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
          <hr/>
          <Route component={Home} exact path="/"></Route>
          <Route component={About} path="/about">about</Route>
        </div>
      </Router>
    )
  }
}

export default Shell;
