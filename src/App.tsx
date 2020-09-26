import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import "./tailwind.output.css";

const App = () => (
  <div>
    <Router>
      <Header />
    </Router>
  </div>
);
export default App;
