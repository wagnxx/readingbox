import React, { Component } from "react"
import { NavLink,HashRouter as Router } from 'react-router-dom'
import './layouts.scss'
class LayoutFooter extends Component {
  state = {
    pages: [
      { name: "market", text: "书城", opened: true, iconName: 'iconshucheng' },
      { name: "variety", text: "分类", opened: false, iconName: 'iconleimupinleifenleileibie' },
      { name: "shelf", text: "书架", opened: false, iconName: 'iconshujia' },
      { name: "mine", text: "我的", opened: false, iconName: 'iconwode' }
    ]
  };
  render() {
    const pages = this.state.pages;

    return (
      <div className="layout__footer">
      <Router>
        {pages.map((item, idx) => {
          // const itemAct = item.opened ? "layout__footer__item--opened" : ";";
          const itemAct = 'layout__footer__item--opened';
          return (
            <NavLink className={"layout__footer__item"} key={idx}
             activeClassName={itemAct}
             to={'/'+item.name}
             >
              <i className={"layout__footer__item__icon iconfont " + item.iconName}></i>
              <span className="layout__footer__item__text">

                {item.text || ""}
              </span>
            </NavLink>
          );
        })}

      </Router>
      </div>
    );
  }
}

export default LayoutFooter;
