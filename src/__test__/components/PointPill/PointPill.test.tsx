//REACT
import React from "react";

//TESTING METHODS
import { render } from "../../setupTest";
import "@testing-library/jest-dom/extend-expect";

//COMPONENTS
import PointPill from "../../../components/PointPill";

describe("PointPill test", () => {
  test("PointPill renders without crashing", () => {
    render(<PointPill number={1000} />);
  });

  test("PointPill has text", () => {
    const { getByText } = render(<PointPill number={2000} />);

    const paginationText = getByText(/2,000/i);

    expect(paginationText).toBeInTheDocument();
  });

  test("PointPill has icon", () => {
    const { getByText } = render(<PointPill number={2000} />);

    const coin = getByText(/coin.svg/i);

    expect(coin).toBeInTheDocument();
  });

  test("PointPill is selected", () => {
    const { getByTestId } = render(<PointPill number={2000} selected />);

    const pillContainer = getByTestId("pill-container");

    expect(pillContainer).toHaveAttribute(
      "class",
      "rounded-full border-2 text-sm md:text-base w-auto font-bold flex p-4 mx-1 my-4 items-center bg-lightblue text-gray-100"
    );
  });
});
