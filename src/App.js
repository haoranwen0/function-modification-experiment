import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Experiment from "./pages/Experiment";
import Instructions from "./pages/Instructions";

function App() {
  return (
    <>
      <Router>
        <Route path="/experiment" exact component={Experiment} />
        <Route path="/" exact component={Instructions} />
      </Router>
    </>
  );
}

export default App;
