import React, { Component } from "react";

class Title extends Component {
  render() {
    return (
      <h1 className="f1 lh-title">
        <div dangerouslySetInnerHTML={{ __html: this.props.title }} />
      </h1>
    );
  }
}

export default Title;
