import React, { Component, PropTypes } from 'react';
import Sizes from '../../styles/base';
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

/*
 *  don't specify default size because heading size is based on it's
 *  level which is required.
 */
Heading.defaultProps = {
  level: '5',
  children: 'hello world!'
}

/*
 *  ensure that the heading component will recieve a size and level
 *  prop, we don't require size because by default the size will be
 *  determined by the level that is set. So that a level 2 heading
 *  will by styled like a size 2 and so on.
 */
Heading.propTypes = {
  size: PropTypes.oneOf(Sizes),
  level: PropTypes.oneOf(Sizes).isRequired,
  children: PropTypes.string
}

export default Heading;
