import React from "react";
import "./App.css";
import BasicRoutes from "./routes";
import LayoutFooter from "./components/layout/LayoutFooter";
export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="layout">
          <header className="layout__header">header</header>
          <div className="layout__content">{BasicRoutes}</div>
          <LayoutFooter />
        </div>
      </div>
    );
  }
}
