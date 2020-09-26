import React, { Suspense } from "react";
import "@testing-library/jest-dom/extend-expect";
import { render as rtlRender, cleanup } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
export { default as userEvent } from "@testing-library/user-event";
afterEach(cleanup);

const AllTheProviders = ({ children, mocks = [], history, isAuth }) => {
  return (
    <Router history={history}>
      <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
    </Router>
  );
};

const customRender = (
  ui,
  {
    mocks = [],
    route = ["/"],
    history = createMemoryHistory({ initialEntries: route }),
    isAuth = false,
    ...renderOptions
  } = {}
) => {
  const Wrapper = ({ children }) => {
    return (
      <AllTheProviders mocks={mocks} history={history}>
        {children}
      </AllTheProviders>
    );
  };

  return {
    ...rtlRender(ui, { wrapper: Wrapper, ...renderOptions }),
    history,
  };
};

// React-Router Wrapper
const routerRender = (
  ui,
  {
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] }),
    ...renderOptions
  } = {}
) => {
  const Wrapper = ({ children }) => (
    <Router history={history}>{children}</Router>
  );

  return {
    ...rtlRender(ui, { wrapper: Wrapper, ...renderOptions }),
    history,
  };
};

// re-export everything
export * from "@testing-library/react";

// override render method
export { routerRender, customRender as render, rtlRender };
