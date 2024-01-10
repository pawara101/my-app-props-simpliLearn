import logo from "./logo.svg";
import "./App.css";
import React from "react";
import NewComp from "./Components/NewComp";

import FunctionalComp from "./Components/FunctionalComp";
import {ClassComponent,ClassComponent1} from "./Components/ClassComp";

import Click from "./Components/Click";
import Counter from "./Components/Counter";

import ParentCompt from "./Components/ParentCompt";

function App() {
  return <div>
    <h1>Hello tutorial</h1>
    <h1>Hello tutorial for Component</h1> 
    <FunctionalComp></FunctionalComp>
    <ClassComponent></ClassComponent>
    <ClassComponent1></ClassComponent1>
    <Click></Click>
    <Counter></Counter>

    <ParentCompt></ParentCompt>
  </div>

  
  
}

export default App;
