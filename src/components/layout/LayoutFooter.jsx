import React, { Component } from "react"
import './layouts.less'
class LayoutFooter extends Component {
  state = {
    pages: [
      { name: "market", text: "书城", opened: true },
      { name: "variety", text: "分类", opened: false },
      { name: "shelf", text: "书架", opened: false },
      { name: "mine", text: "我的", opened: false }
    ]
  };
  render() {
    const pages = this.state.pages;

    return (
      <div className="layout__footer">
        {pages.map((item,idx) => {
          const itemAct = item.opened ? "layout__footer__item--opened" : ";";
          return (
            <div className={"layout__footer__item" + itemAct} key={idx}>
              {item.text || ""}
            </div>
          );
        })}
      </div>
    );
  }
}

export default LayoutFooter;
