//REACT
import React, { Suspense } from "react";

//COMPONENTS
import Header from "./components/Header";
import FilterBar from "./components/FilterBar";
import Pagination from "./components/Pagination";
import ProductsContainer from "./containers/ProductsContainer";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";

//ROUTER
import { BrowserRouter as Router } from "react-router-dom";

//PAGES
import NotFoundPage from "./pages/404";

//TAILWIND
import "./tailwind.output.css";
import Spinner from "./components/Spinner";
import HistoryItem from "./components/HistoryItem";
import HistoryContainer from "./containers/HistoryContainer";
import HistoryPage from "./pages/HistoryPage";
import Banner from "./components/Banner";
import MainImage from "./assets/images/header-x1.png";
import MainImage2x from "./assets/images/header-x2.png";

const App = () => (
  <div className="bg-gray-100 w-full">
    <ErrorBoundary>
      <Router>
        <Suspense fallback={<Spinner />}>
          <Header />
          {/* <FilterBar />
          <ProductsContainer />
          <HistoryContainer />
          <Pagination /> */}
          <Banner
            title="Electronics"
            imgSrc={MainImage}
            srcSet={`${MainImage2x} 2x`}
          />
          <HistoryPage></HistoryPage>
          <Footer />
        </Suspense>
      </Router>
    </ErrorBoundary>
  </div>
);
export default App;
