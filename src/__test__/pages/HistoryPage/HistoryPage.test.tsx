//REACT
import React from "react";

//TESTING METHODS
import { render } from "../../setupTest";
import "@testing-library/jest-dom/extend-expect";

//PAGES

import HistoryPage from "../../../pages/HistoryPage";

describe("HistoryPage test", () => {
  test("HistoryPage renders without crashing", () => {
    render(<HistoryPage />);
  });

  test("HistoryPage has content", async () => {
    const { getByText } = render(<HistoryPage />);

    const pageTitle = getByText(/Hello There!/i);
    const pageSubtitle = getByText(
      /Hope you're enjoying these awesome products :\)/i
    );
    const paginationText = getByText(/0 of 0/i);
    const productHeading = getByText(/Photo/i);
    const footerText = getByText(/Codeado con/i);

    expect(pageTitle).toBeInTheDocument();
    expect(pageSubtitle).toBeInTheDocument();
    expect(paginationText).toBeInTheDocument();
    expect(productHeading).toBeInTheDocument();
    expect(footerText).toBeInTheDocument();
  });
});
