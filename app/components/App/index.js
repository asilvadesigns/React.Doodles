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
          <Heading level='2' size='4'>Page Heading</Heading>
          <p>Elit aspernatur laudantium porro maxime ea assumenda hic ad corrupti autem aut. Esse vero doloribus deleniti sit beatae maxime. Maiores accusantium magnam quisquam nam earum dolores pariatur quis voluptates cupiditate.</p>
          <Button size='sm'>I"m a button, click me </Button>
        </Container>
      </div>
    )
  }
}

export default App;
