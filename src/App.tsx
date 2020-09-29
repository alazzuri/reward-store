//REACT
import React from "react";

//COMPONENTS
import Header from "./components/Header";

//ROUTER
import { BrowserRouter as Router } from "react-router-dom";

//TAILWIND
import "./tailwind.output.css";
import Card from "./components/Card";
import FilterBar from "./components/FilterBar";
import ProductsContainer from "./containers/ProductsContainer";

const App = () => (
  <div className="bg-gray-100 w-full">
    <Router>
      <Header />
      <FilterBar />
      <ProductsContainer />
    </Router>
  </div>
);
export default App;
