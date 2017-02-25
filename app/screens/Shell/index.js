//core
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  IndexLink
} from 'react-router-dom';
//screens
import About from '../About';
import Home from '../Home';
//styles
import cx from 'classNames';
import sx from './styles.scss';

class Shell extends Component {
  render() {
    return (
      <Router className={cx(sx.shell)}>
        <div>
          <NavLink activeClassName="active" exact to="/">Home</NavLink>
          <NavLink activeClassName="active" to="/about">About</NavLink>
          <hr/>
          <Route component={Home} exact path="/"/>
          <Route component={About} path="/about"/>
        </div>
      </Router>
    )
  }
}

export default Shell;
