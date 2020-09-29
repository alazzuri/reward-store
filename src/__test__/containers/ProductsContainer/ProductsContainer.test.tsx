//REACT
import React from "react";

//TESTING METHODS
import { render } from "../../setupTest";
import "@testing-library/jest-dom/extend-expect";

//COMPONENTS
import ProductsContainer from "../../../containers/ProductsContainer";

describe("Product Card test", () => {
  test("Card renders without crashing", () => {
    render(<ProductsContainer />);
  });
});
