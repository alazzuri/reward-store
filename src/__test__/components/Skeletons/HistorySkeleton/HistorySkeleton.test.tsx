//REACT
import React from "react";

//TESTING METHODS
import { render } from "../../../setupTest";
import "@testing-library/jest-dom/extend-expect";

//COMPONENTS
import HistorySkeleton from "../../../../components/Skeletons/HistorySkeleton";

describe("HistorySkeleton test", () => {
  test("HistorySkeleton renders without crashing", () => {
    render(<HistorySkeleton />);
  });
});
