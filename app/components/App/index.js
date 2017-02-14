import React, { Component } from 'react';
import Heading from '../Heading';
import cx from 'classNames';
import sx from './styles.scss';

class App extends Component {
  render() {
    return (
      <div className={cx(sx.chicken,'chicken','nuggets')}>
        <Heading level='1' size='6'/>
      </div>
    )
  }
}

export default App;
