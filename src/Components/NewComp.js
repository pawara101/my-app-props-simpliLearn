import React, { Component } from 'react'

export class NewComp extends Component {
    bellA = "https://w7.pngwing.com/pngs/687/363/png-transparent-bell-icon-bell-icon-bell-button-button-subscribe-symbol-sign-design-bell-symbol-thumbnail.png"
    bellB = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH1bPi58R2Ksy2zgQuc7_U-NkywTcQf24m-LJf_GtZFA&s"
    constructor(props) {
      super(props)
    
      //State Object
      this.state = {
         message: "Subscribed to Dexter",
         sub:"Subscribe",
         imageURL:this.bellA
      }
    }
    styles = {
        fontStyle: "italic",
        color: "red"
      };

//Button Component
Buttonchange =()=>{
    this.setState({
        message: "Hit the Sub Button",
        sub:"Subscribed"
    });
}

imageChange =()=>{
    this.setState({
        imageURL:this.bellB,
        message:"Thanks!!!"
    })
}

  render() {
    return (
      <div className='App'>
        <h3 style={this.styles}>{this.state.message}</h3>
        <button onClick={this.Buttonchange}>{this.state.sub}</button>
        <p/>
        <img src={this.state.imageURL}
        onClick={this.imageChange}></img>
      </div>
    )
  }
}

export default NewComp
