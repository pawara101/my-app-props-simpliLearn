import logo from "./logo.svg";
import "./App.css";
import React from "react";
import NewComp from "./Components/NewComp";

import FunctionalComp from "./Components/FunctionalComp";
import ClassComponent from "./Components/ClassComp";

function App() {
  return <div>
    <h1>Hello tutorial</h1>
    <h1>Hello tutorial for Component</h1> 
    <FunctionalComp></FunctionalComp>
    <ClassComponent></ClassComponent>
  
  </div>

  
  
}

export default App;
