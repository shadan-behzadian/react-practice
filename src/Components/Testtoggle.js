import React, { Component } from 'react';
import ToggleDisplay from 'react-toggle-display';


//class LoggingButton extends React.Component {
//  // This syntax ensures `this` is bound within handleClick.
//  // Warning: this is *experimental* syntax.
//  handleClick = () => {
//    console.log('this is:', this);
//  }
//
//  render() {
//    return (
//      <button onClick={this.handleClick}>
//        Click me
//      </button>
//    );
//  }
//}
//
//
//export default LoggingButton;


class LoggingButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true,
                 show: false };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn,
        show: !this.state.show
    }));
  }

  render() {
    return (
        <div className="Toggle">
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'Love' : 'you!'}
      </button>
        <ToggleDisplay show={this.state.show}>
         
        </ToggleDisplay>
 
        <ToggleDisplay if={this.state.show} tag="section">
          <a href="https://www.youtube.com/watch?v=HUaIdOsJqF8">Love is in the air</a>
        </ToggleDisplay>
          
        </div>
    );
  }
}

export default LoggingButton;