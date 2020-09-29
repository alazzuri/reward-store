//REACT
import React from "react";

//TESTING METHODS
import { render } from "../../setupTest";
import "@testing-library/jest-dom/extend-expect";

//COMPONENTS
import Pagination from "../../../components/Pagination";

describe("Pagination test", () => {
  test("Pagination renders without crashing", () => {
    render(<Pagination />);
  });

  test("Pagination has text", () => {
    const { getByText } = render(<Pagination />);

    const paginationText = getByText(/16 of 32 products/i);

    expect(paginationText).toBeInTheDocument;
  });

  test("Pagination has icons", () => {
    const { getByText } = render(<Pagination />);

    const chevronLeft = getByText(/arrow-left.svg/i);
    const chevronRight = getByText(/arrow-right.svg/i);

    expect(chevronLeft).toBeInTheDocument;
    expect(chevronRight).toBeInTheDocument;
  });
});
