//REACT
import React from "react";

//TESTING METHODS
import { render } from "../../setupTest";
import "@testing-library/jest-dom/extend-expect";

//COMPONENTS
import Banner from "../../../components/Banner";

//ASSETS
import MainImage from "../../../assets/images/header-x1.png";
import MainImage2x from "../../../assets/images/header-x2.png";

describe("Banner Test", () => {
  test("Banner renders without crashing", () => {
    render(
      <Banner
        title="Electronics"
        imgSrc={MainImage}
        srcSet={`${MainImage2x} 2x`}
      />
    );
  });

  test("Banner has image", () => {
    const { getByRole } = render(
      <Banner
        title="Electronics"
        imgSrc={MainImage}
        srcSet={`${MainImage2x} 2x`}
      />
    );
    const image = getByRole("img");

    expect(image).toHaveAttribute("src", MainImage);
    expect(image).toHaveAttribute("srcSet", `${MainImage2x} 2x`);
  });

  test("Banner has title", () => {
    const { getByText } = render(
      <Banner
        title="Electronics"
        imgSrc={MainImage}
        srcSet={`${MainImage2x} 2x`}
      />
    );

    const title = getByText(/Electronics/i);

    expect(title).toBeInTheDocument;
  });
});
