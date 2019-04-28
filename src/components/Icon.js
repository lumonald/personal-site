import "../styles/Icon.scss";
import React, { Component } from "react";

class Icon extends Component {
  render() {
    return (
      <div className="fl w-50 w-25-ns pa2">
        <div className="tc pv4">
          <a href={this.props.icon.url}>
            <i
              className={
                "tc light-silver fl w-25 fa fa-2x " + this.props.icon.faClass
              }
            >
              <span className="dn">{this.props.icon.name}</span>
            </i>
          </a>
        </div>
      </div>
    );
  }
}

export default Icon;
