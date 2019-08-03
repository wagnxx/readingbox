import React, { Component } from "react";
export default class ListItem extends Component {
  render() {
      const info= this.props.info;

    return <div>
        <span>{info.name}</span>
        <span>{info.desc}</span>
        <span>{info.path}</span>
    </div>;
  }
}
