//REACT
import React from "react";

//TESTING METHODS
import { render } from "../../setupTest";
import "@testing-library/jest-dom/extend-expect";

//PAGES
import ProductsPage from "../../../pages/ProductsPage";

describe("ProductsPage test", () => {
  test("ProductsPage renders without crashing", () => {
    render(<ProductsPage />);
  });

  test("ProductsPage has content", async () => {
    const { getByText, getAllByText } = render(<ProductsPage />);

    const pageTitle = getByText(/Electronics/i);
    const paginationText = getAllByText(/0 of 0/i);
    const filterLabel = getByText(/Sort by/i);
    const footerText = getByText(/Codeado con/i);

    expect(pageTitle).toBeInTheDocument();
    expect(filterLabel).toBeInTheDocument();

    expect(paginationText[0]).toBeInTheDocument();
    expect(paginationText[1]).toBeInTheDocument();
    expect(footerText).toBeInTheDocument();
  });
});
