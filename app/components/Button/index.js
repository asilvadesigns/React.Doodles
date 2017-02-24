import React, { Component, PropTypes } from 'react';
import Base from '../../styles/base';
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
      <button className={cx(sx.button, sx[`${this.props.size}`], ActiveClass)} onClick={HandleClick}>
        {this.props.children}
      </button>
    )
  }
}

Button.defaultProps = {
  size: 'md',
  children: 'Hello World!'
}

Button.propTypes = {
  size: PropTypes.oneOf(Base.ButtonSizes).isRequired,
  children: PropTypes.node.isRequired
}

export default Button;
