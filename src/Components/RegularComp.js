import React, { Component } from 'react'

export class RegularComp extends Component {
  
  render() {
    console.log("Regular components render");
    return (
      <div>
        I am the regular Component...... {this.props.name}
      </div>
    )
  }
}

export default RegularComp
