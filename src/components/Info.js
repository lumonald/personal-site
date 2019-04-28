import React, { Component } from "react";

import Title from "./Title";
import Bio from "./Bio";
import Icon from "./Icon";

import jsonData from "../data.json";
import "font-awesome/css/font-awesome.min.css";

class Info extends Component {
  iconComponents = jsonData.icons.map(icon => (
    <Icon key={icon.id} icon={icon} />
  ));

  render() {
    return (
      <article className="pa3 pa5-ns measure">
        <Title key={jsonData.info.name} title={jsonData.info.name} />
        <Bio
          key={jsonData.info.id}
          bio={jsonData.info.bio}
          location={jsonData.info.location}
        />
        <div>
          <div className="cf">{this.iconComponents}</div>
        </div>
      </article>
    );
  }
}

export default Info;
