//REACT
import React from "react";

//TESTING METHODS
import { render } from "../../setupTest";
import "@testing-library/jest-dom/extend-expect";

//COMPONENTS
import LoadingSkeleton from "../../../components/Skeleton";

describe("LoadingSkeleton test", () => {
  test("LoadingSkeleton renders without crashing", () => {
    render(<LoadingSkeleton />);
  });
});
