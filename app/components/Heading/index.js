import React, { Component } from 'react';
import cx from 'classNames';
import sx from './styles.scss';

class Heading extends Component {
  getSize(num) {
    let size = {
      '1': sx.h1,
      '2': sx.h2,
      '3': sx.h3,
      '4': sx.h4,
      '5': sx.h5,
      '6': sx.h6
    };
    return (size[num] || size['4']);
  }

  render() {
    const GetLevel = `h${this.props.level}`;
    return (
      <GetLevel className={ cx(sx.heading, this.getSize(this.props.size)) }>
        {this.props.children ? this.props.children : 'hello world!'}
      </GetLevel>
    )
  }
}

export default Heading;
