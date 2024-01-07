import React, { Component } from 'react'

export class Classprops extends Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.name} Welcome to test Component.....</h1>
        <p>{this.props.children}</p>
      </div>
      
    )
  }
}

export default Classprops
