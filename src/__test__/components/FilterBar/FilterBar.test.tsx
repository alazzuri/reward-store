//REACT
import React from "react";

//TESTING METHODS
import { render } from "../../setupTest";
import "@testing-library/jest-dom/extend-expect";

//COMPONENTS
import FilterBar from "../../../components/FilterBar";

describe("FilterBar test", () => {
  test("FilterBar renders without crashing", () => {
    render(<FilterBar />);
  });

  test("FilterBar has text", () => {
    const { getByText } = render(<FilterBar />);

    const paginationText = getByText(/16 of 32 products/i);
    const filterBarTitle = getByText(/Sort By/i);

    expect(paginationText).toBeInTheDocument;
    expect(filterBarTitle).toBeInTheDocument;
  });

  test("FilterBar has dropdown icons", () => {
    const { getByText } = render(<FilterBar />);

    const chevronLeft = getByText(/arrow-left.svg/i);
    const chevronRight = getByText(/arrow-right.svg/i);

    expect(chevronLeft).toBeInTheDocument;
    expect(chevronRight).toBeInTheDocument;
  });

  test("FilterBar has filter buttons", () => {
    const { getByText, getAllByText } = render(<FilterBar />);

    const categoryLabel = getByText(/All Categories/i);
    const priceLabel = getByText(/Price/i);
    const dropdownIcons = getAllByText(/chevron-down.svg/i);

    expect(categoryLabel).toBeInTheDocument;
    expect(priceLabel).toBeInTheDocument;
    expect(dropdownIcons.length).toBe(2);
  });
});
