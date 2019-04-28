import React, { Component } from "react";
import Info from "./Info";
import Loader from "../../node_modules/react-loader-spinner";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    var orig = document.body.className;
    document.body.className =
      orig + (orig ? " " : "") + "bg-light-gray dark-gray";

    setTimeout(() => {
      this.setState({
        isLoading: false
      });
    }, 1300);
  }

  render() {
    return (
      <div>
        {this.state.isLoading ? (
          <div className="vh-100 dt w-100">
            <div className="dtc v-mid tc ph3 ph4-l">
              <Loader type="Triangle" color="#19A974" height="75" width="75" />
            </div>
          </div>
        ) : (
          <div className="w-100 avenir">
            <Info />
          </div>
        )}
      </div>
    );
  }
}

export default App;
