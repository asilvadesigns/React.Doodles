import React, { Component, PropTypes } from 'react';
import cx from 'classNames';
import sx from './styles.scss';

class Button extends Component {
  constructor() {
    super();

    this.toggleState = this.toggleState.bind(this);
    this.state = {
      isActive: false
    }
  }

  toggleState() {
    this.setState({
      isActive: !this.state.isActive
    });
  }

  render() {
    const ActiveClass = {[sx.active]: this.state.isActive};
    const HandleClick = this.props.onClick ? this.props.onClick : this.toggleState
    return (
      <button className={cx(sx.button, ActiveClass)} onClick={HandleClick}>
        {this.props.children}
      </button>
    )
  }
}

Button.defaultProps = {
  children: 'Hello World!'
}

Button.propTypes = {
  children: PropTypes.node.isRequired
}

export default Button;
