import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Experiment from "./pages/Experiment";
import Instructions from "./pages/Instructions";
import Survey from "./pages/Survey";
import Difference from "./pages/Difference";
import Submitted from "./pages/Submitted";
import Data from "./pages/Data";
import SubjectData from "./pages/SubjectData";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Router>
        <Route path="/" exact component={Instructions} />
        <Route path="/experiment" exact component={Experiment} />
        <Route path="/survey" exact component={Survey} />
        <Route path="/difference" exact component={Difference} />
        <Route path="/submitted" exact component={Submitted} />
        <Route path="/data" exact component={Data} />
        <Route path="/data/subject/:email" exact component={SubjectData} />
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
