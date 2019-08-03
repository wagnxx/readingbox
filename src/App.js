import React from "react";
import "./App.css";
import BasicRoutes from "./routes";
import LayoutFooter from "./components/layout/LayoutFooter";
export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">header</header>
        <div>
          {/* <BasicRoutes></BasicRoutes> */}
          {BasicRoutes}
        </div>
        <LayoutFooter />
      </div>
    )
  }
}
