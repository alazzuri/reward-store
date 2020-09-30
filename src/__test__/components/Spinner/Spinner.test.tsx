//REACT
import React from "react";

//TESTING METHODS
import { render } from "../../setupTest";
import "@testing-library/jest-dom/extend-expect";

//COMPONENTS
import Spinner from "../../../components/Spinner";

describe("Spinner test", () => {
  test("Spinner renders without crashing", () => {
    render(<Spinner />);
  });
});
