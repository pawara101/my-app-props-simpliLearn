import React, { Component } from 'react'

export class NewComp extends Component {
    constructor(props) {
      super(props)
    
      //State Object
      this.state = {
         message: "Subscribed to Dexter"
      }
    }
    styles = {
        fontStyle: "italic",
        color: "red"
      };

  render() {
    return (
      <div className='App'>
        <h3 style={this.styles}>{this.state.message}</h3>
      </div>
    )
  }
}

export default NewComp
