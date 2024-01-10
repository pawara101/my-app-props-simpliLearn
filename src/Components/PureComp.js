import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {
  render() {
    console.log("Pure components render");
    return (
      <div>
        I am the PureComponent ........ {this.props.name}
      </div>
    )
  }
}

export default PureComp
