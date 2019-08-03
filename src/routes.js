import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";


import Market from "./pages/market";
import Variety from "./pages/variety";
import Shelf from "./pages/shelf";
import Mine from "./pages/mine";

// export default class BasicRoutes extends React.Component {
//   render() {
//     return (
//       <Router>
//         {/* <App> */}
//           <Switch>
//             <Route exact path="/" component={Market} />
//             <Route path="/market" component={Market} />
//             <Route path="/variety" component={Variety} />
//             <Route path="/shelf" component={Shelf} />
//             <Route path="/mine" component={Mine} />
//           </Switch>

//       </Router>
//     );
//   }
// }

export default (
  <Router>
    <Route exact path="/" component={Market} />
    <Route path="/market" component={Market} />
    <Route path="/variety" component={Variety} />
    <Route path="/shelf" component={Shelf} />
    <Route path="/mine" component={Mine} />
  </Router>
);
