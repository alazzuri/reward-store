//REACT
import React from "react";

//TESTING METHODS
import { render } from "../../setupTest";
import "@testing-library/jest-dom/extend-expect";

//PAGES
import NotFoundPage from "../../../pages/404";

describe("NotFoundPage test", () => {
  test("NotFoundPage renders without crashing", () => {
    render(<NotFoundPage />);
  });
});
