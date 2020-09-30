//REACT
import React from "react";

//COMPONENTS
import Header from "./components/Header";
import FilterBar from "./components/FilterBar";
import Pagination from "./components/Pagination";
import ProductsContainer from "./containers/ProductsContainer";
import Footer from "./components/Footer";

//ROUTER
import { BrowserRouter as Router } from "react-router-dom";

//TAILWIND
import "./tailwind.output.css";

const App = () => (
  <div className="bg-gray-100 w-full">
    <Router>
      <Header />
      <FilterBar />
      <ProductsContainer />

      <Pagination />
      <Footer />
    </Router>
  </div>
);
export default App;
