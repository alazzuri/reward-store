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

  test("ErrorBoundary has text and image", () => {
    const { getByText, getByRole } = render(
      <ErrorBoundary>
        <CrashingComponent />
      </ErrorBoundary>
    );

    const errorTitle = getByText(/Something went wrong/i);
    const errorDescription = getByText(/Please try reloading the app/i);
    const errorImage = getByRole("img");

    expect(errorTitle).toBeInTheDocument;
    expect(errorDescription).toBeInTheDocument;
    expect(errorImage).toHaveAttribute("src", "Error.png");
    expect(errorImage).toHaveAttribute("alt", "error-page");
  });
});
