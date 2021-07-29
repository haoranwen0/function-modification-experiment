import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Experiment from "./pages/Experiment";
import Instructions from "./pages/Instructions";
import Survey from "./pages/Survey";
import Difference from "./pages/Difference";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Router>
        <Route path="/" exact component={Instructions} />
        <Route path="/experiment" exact component={Experiment} />
        <Route path="/survey" exact component={Survey} />
        <Route path="/difference" exact component={Difference} />
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
