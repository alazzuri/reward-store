//REACT
import React from "react";

//TESTING METHODS
import { render } from "../../setupTest";
import "@testing-library/jest-dom/extend-expect";

//COMPONENTS
import Footer from "../../../components/Footer";

describe("Footer test", () => {
  test("Footer renders without crashing", () => {
    render(<Footer />);
  });

  test("Footer has text", () => {
    const { getByText } = render(<Footer />);

    const footerText = getByText(/Codeado con/i);
    const githubText = getByText(/github.com\/alazzuri/i);

    expect(footerText).toBeInTheDocument;
    expect(githubText).toBeInTheDocument;
  });
});
