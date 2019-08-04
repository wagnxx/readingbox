import React, { Component } from "react";
import { isTemplateElement } from "@babel/types";
export default class ListItem extends Component {
  render() {
    const info = this.props.info;

    return (
      <div className="shelf__list__item">
        <div className="shelf__list__item__icon">
          <span>
          <img src={info.path}  alt=""/>
          </span>
        </div>
        <div className="shelf__list__item__titles">
          <span className="shelf__list__item__titles__main">{info.name}</span>
          <span className="shelf__list__item__titles__sub">{info.desc}</span>
        </div>
        <div className="shelf__list__item__message">
          <span>{info.message||''}</span>
        </div>
      </div>);
  }
}
