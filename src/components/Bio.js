import React, { Component } from "react";

class Bio extends Component {
  render() {
    return (
      <article className="measure">
        <p className="f2 lh-copy">{this.props.bio}</p>
        <p className="f3 lh-copy">{this.props.location}</p>
      </article>
    );
  }
}

export default Bio;
