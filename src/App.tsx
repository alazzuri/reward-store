//REACT
import React, { Suspense } from "react";

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
import Spinner from "./components/Spinner";

const App = () => (
  <div className="bg-gray-100 w-full">
    <Router>
      <Suspense fallback={<Spinner />}>
        <Header />
        <FilterBar />
        <ProductsContainer />
        <Pagination />
        <Footer />
      </Suspense>
    </Router>
  </div>
);
export default App;
