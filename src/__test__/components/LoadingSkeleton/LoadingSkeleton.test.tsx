//REACT
import React from "react";

//TESTING METHODS
import { render } from "../../setupTest";
import "@testing-library/jest-dom/extend-expect";

//COMPONENTS
import CardSkeleton from "../../../components/Skeletons/CardSkeleton";
import HistorySkeleton from "../../../components/Skeletons/HistorySkeleton";

describe("Loading Skeletons test", () => {
  test("CardSkeleton renders without crashing", () => {
    render(<CardSkeleton />);
  });

  test("History Skeleton renders without crashing", () => {
    render(<HistorySkeleton />);
  });
});
