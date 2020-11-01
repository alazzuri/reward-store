//REACT
import React from "react";

//TESTING METHODS
import { render, userEvent } from "../../setupTest";
import "@testing-library/jest-dom/extend-expect";

//COMPONENTS

import PillButton from "../../../components/PillButton";

describe("PillButton test", () => {
  console.log = jest.fn();

  test("PillButton renders without crashing", () => {
    render(<PillButton onHandleClick={() => console.log("Button pressed")} />);
  });

  test("PillButton has a button", () => {
    const { getByRole } = render(
      <PillButton onHandleClick={() => console.log("Button pressed")} />
    );

    const button = getByRole("button");

    expect(button).toBeInTheDocument();
  });

  test("PillButton renders childrens", () => {
    const { getByText } = render(
      <PillButton onHandleClick={() => console.log("Button pressed")}>
        <div>A children element</div>
      </PillButton>
    );

    const children = getByText("A children element");

    expect(children).toBeInTheDocument();
  });

  test("PillButton is clickable", () => {
    const { getByRole } = render(
      <PillButton onHandleClick={() => console.log("Button pressed")} />
    );

    const button = getByRole("button");

    userEvent.click(button);

    expect(console.log).toHaveBeenCalledWith("Button pressed");
  });
});
