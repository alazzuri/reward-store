//REACT
import React, { Suspense } from "react";

//COMPONENTS
import Spinner from "../../components/Spinner";
import ErrorBoundary from "../../components/ErrorBoundary";

//ROUTER
import { BrowserRouter as Router } from "react-router-dom";

//CONTEXT
import AppContextProvider from "../../context/AppContext";

const ProvidersContainer: React.FC = ({ children }) => {
  return (
    <ErrorBoundary>
      <AppContextProvider>
        <Suspense fallback={<Spinner />}>
          <Router>{children}</Router>
        </Suspense>
      </AppContextProvider>
    </ErrorBoundary>
  );
};

export default ProvidersContainer;
