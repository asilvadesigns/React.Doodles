//core
import React, { Component, PropTypes } from 'react';
//styles
import cx from 'classNames';
import sx from './styles.scss';

class Container extends Component {
  render() {
    return (
      <div className={cx(sx.container)}>
        {this.props.children}
      </div>
    )
  }
}

Container.propTypes = {
  children: PropTypes.node.isRequired
}

export default Container;
