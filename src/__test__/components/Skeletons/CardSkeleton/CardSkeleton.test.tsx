//REACT
import React from "react";

//TESTING METHODS
import { render } from "../../../setupTest";
import "@testing-library/jest-dom/extend-expect";

//COMPONENTS
import CardSkeleton from "../../../../components/Skeletons/CardSkeleton";

describe("CardSkeleton test", () => {
  test("CardSkeleton renders without crashing", () => {
    render(<CardSkeleton />);
  });
});
