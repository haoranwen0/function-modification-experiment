import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Experiment from "./pages/Experiment";
import Instructions from "./pages/Instructions";
import Survey from "./pages/Survey";
import Difference from "./pages/Difference";

function App() {
  return (
    <>
      <Router>
        <Route path="/experiment" exact component={Experiment} />
        <Route path="/" exact component={Instructions} />
        <Route path="/survey" exact component={Survey} />
        <Route path="/difference" exact component={Difference} />
      </Router>
    </>
  );
}

export default App;
