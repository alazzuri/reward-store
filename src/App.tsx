//REACT
import React, { Suspense } from "react";

//COMPONENTS
import Spinner from "./components/Spinner";
import ErrorBoundary from "./components/ErrorBoundary";

//ROUTER
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";

//TAILWIND
import "./tailwind.output.css";

const App = () => (
  <div className="bg-gray-100 w-full">
    <Suspense fallback={<Spinner />}>
      <ErrorBoundary>
        <Router>
          <Routes />
        </Router>
      </ErrorBoundary>
    </Suspense>
  </div>
);
export default App;
