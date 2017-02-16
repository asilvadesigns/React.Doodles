import React, { Component } from 'react';
import Container from '../Container';
import Heading from '../Heading';
import Button from '../Button';
import cx from 'classNames';
import sx from './styles.scss';

class App extends Component {
  render() {
    return (
      <div className={cx(sx.app)}>
        <Container>
          <Heading />
          <p>Elit aspernatur laudantium porro maxime ea assumenda hic ad corrupti autem aut. Esse vero doloribus deleniti sit beatae maxime. Maiores accusantium magnam quisquam nam earum dolores pariatur quis voluptates cupiditate.</p>
          <Button />
        </Container>
      </div>
    )
  }
}

export default App;
