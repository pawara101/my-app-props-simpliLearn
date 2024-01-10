import React, { Component } from 'react'
import PureComp from './PureComp';
import RegularComp from './RegularComp';

export class ParentCompt extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: "SimpliLearn"
      }
    }
    
    componentDidMount(){
        setInterval(() =>{
            this.setState({
                name: "SimpliLearn"
            });
        },3000);
    }
  render() {
    console.log("ParentCompt rendered");
    return (
      <div>
        I am the Parent Component....
        <RegularComp name={this.state.name}/>
        <PureComp name={this.state.name} />
      </div>
    )
  }
}

export default ParentCompt
