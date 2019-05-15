import React, { Component } from "react";
import Info from "./Info";

class App extends Component {
  componentDidMount() {
    var orig = document.body.className;
    document.body.className =
      orig + (orig ? " " : "") + "bg-light-gray dark-gray";
  }

  render() {
    return (
        <div className="w-100 avenir">          
          <Info />          
        </div>              
    );
  }
}

export default App;
