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

//CONTEXT
import AppContextProvider from "./context/AppContext";

const App = () => (
  <div className="bg-gray-100 w-full">
    <Suspense fallback={<Spinner />}>
      <ErrorBoundary>
        <AppContextProvider>
          <Router>
            <Routes />
          </Router>
        </AppContextProvider>
      </ErrorBoundary>
    </Suspense>
  </div>
);
export default App;
