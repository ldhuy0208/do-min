import React, { Component } from "react";

class ButtonHoldPress extends Component {
  handleButtonPress = () => {
    this.buttonPressTimer = setTimeout(this.props.eventHandler, 300);
    this.timeStart = new Date().getTime();
  };

  handleButtonRelease = () => {
    clearTimeout(this.buttonPressTimer);
    const diff = new Date().getTime() - this.timeStart;
    if (diff < 200) this.props.onClick();
  };

  render() {
    return (
      <div
        onTouchStart={this.handleButtonPress}
        onTouchEnd={this.handleButtonRelease}
        onMouseDown={this.handleButtonPress}
        onMouseUp={this.handleButtonRelease}
        onMouseLeave={this.handleButtonRelease}
      >
        {this.props.children}
      </div>
    );
  }
}

export default ButtonHoldPress;
