//REACT
import React from "react";

//TESTING METHODS
import { render } from "../../setupTest";
import "@testing-library/jest-dom/extend-expect";

//COMPONENTS
import Header from "../../../components/Header";
import userEvent from "@testing-library/user-event";

describe("Header Test", () => {
  test("Header render without crashing", () => {
    render(<Header />);
  });

  test("Header has user info", () => {
    const { getByTestId } = render(<Header />);
    const userInfo = getByTestId("user-info");

    expect(userInfo).toBeInTheDocument;
  });

  test("Dropdown menu show items", () => {
    const { getByText, getByRole } = render(<Header />);
    const dropdownButton = getByRole("button");

    userEvent.click(dropdownButton);

    const home = getByText(/Home/i);
    const getPoints = getByText(/Get more points/i);
    const history = getByText(/History/i);

    expect(home).toBeInTheDocument;
    expect(getPoints).toBeInTheDocument;
    expect(history).toBeInTheDocument;
  });
});
