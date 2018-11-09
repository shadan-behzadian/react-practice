import React, { Component } from 'react';
import ToggleDisplay from 'react-toggle-display';
//the line up here is importet from react the we site you found it from : https://www.npmjs.com/package/react-toggle-display
// npm install react-toggle-display (command you used to install toggle)


 
class Toggle extends Component {
  constructor() {
    super();
    this.state = { show: false };
    this.handleClick = this.handleClick.bind(this);
  }
 
    
    //arrow function changes the scope of this becaouse this norally refers to constructor
  handleClick= () =>{
    this.setState({
      show: !this.state.show
    });
  }
 
  render() {
    return (
      <div className="Toggle">
        <p className="Toggle-intro">
          <button onClick={ this.handleClick }>Toggle things</button>
        </p>
        <ToggleDisplay show={this.state.show}>
          I am rendered in a span (by default) and hidden with display:none when show is false.
        </ToggleDisplay>
 
        <ToggleDisplay if={this.state.show} tag="section">
          I am rendered in a section and removed from the DOM when if is false.
        </ToggleDisplay>
      </div>
    );
  }
}
 
export default Toggle;