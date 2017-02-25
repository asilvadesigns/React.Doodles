//core
import React, { Component, PropTypes } from 'react';
//styles
import Base from '../../styles/base';
import cx from 'classNames';
import sx from './styles.scss';

class Heading extends Component {
  render() {
    const HeadingTagName = `h${this.props.level}`;
    const HeadingDefault = this.props.size ? this.props.size : this.props.level;

    return (
      <HeadingTagName className={cx(sx.heading, sx[`h${HeadingDefault}`])}>
        {this.props.children}
      </HeadingTagName>
    )
  }
}

Heading.defaultProps = {
  level: '5',
  children: 'hello world!'
}

Heading.propTypes = {
  size: PropTypes.oneOf(Base.HeadingSizes),
  level: PropTypes.oneOf(Base.HeadingSizes).isRequired,
  children: PropTypes.string
}

export default Heading;
