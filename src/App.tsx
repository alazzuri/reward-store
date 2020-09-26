//REACT
import React from "react";

//COMPONENTS
import Header from "./components/Header";

//ROUTER
import { BrowserRouter as Router } from "react-router-dom";

//TAILWIND
import "./tailwind.output.css";

const App = () => (
  <div>
    <Router>
      <Header />
    </Router>
  </div>
);
export default App;
