//REACT
import React from "react";

//TESTING METHODS
import { render } from "../../setupTest";
import "@testing-library/jest-dom/extend-expect";

//COMPONENTS
import ErrorBoundary from "../../../components/ErrorBoundary";
import CrashingComponent from "../../mock/error";

describe("ErrorBoundary test", () => {
  test("ErrorBoundary renders without crashing", () => {
    render(
      <ErrorBoundary>
        <CrashingComponent />
      </ErrorBoundary>
    );
  });

  test("ErrorBoundary has text", () => {
    const { getByText } = render(
      <ErrorBoundary>
        <CrashingComponent />
      </ErrorBoundary>
    );

    const errortext = getByText(/Something went wrong/i);

    expect(errortext).toBeInTheDocument;
  });
});
