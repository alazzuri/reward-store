//REACT
import React from "react";

//TESTING METHODS
import { render, userEvent } from "../../setupTest";
import "@testing-library/jest-dom/extend-expect";

//PAGES
import EarnPointsPage from "../../../pages/EarnPointsPage";

describe("EarnPointsPaage test", () => {
  test("EarnPointsPage renders without crashing", () => {
    render(<EarnPointsPage />);
  });

  test("EarnPointsPage has content", async () => {
    const { getByText, getAllByText } = render(<EarnPointsPage />);

    const pageTitle = getByText(/Test your luck!/i);
    const pageSubtitle = getByText(/Click the button and get some points/i);
    const prizeButton = getAllByText(/1,000/i);
    const footerText = getByText(/Codeado con/i);

    expect(pageTitle).toBeInTheDocument();
    expect(pageSubtitle).toBeInTheDocument();
    expect(prizeButton[0]).toBeInTheDocument();
    expect(footerText).toBeInTheDocument();
  });

  test("EarnPointsPage has button. Button is clickable", async () => {
    jest.setTimeout(30000);
    const { getByRole } = render(<EarnPointsPage />);

    const startButton = getByRole("button", { name: "Get Points!" });

    userEvent.click(startButton);
    const disabledButton = getByRole("button", { name: "Good Luck!" });
    expect(disabledButton).toBeInTheDocument();
  });
});
