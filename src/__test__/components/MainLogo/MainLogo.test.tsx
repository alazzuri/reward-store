//REACT
import React from "react";

//TESTING METHODS
import { render } from "../../setupTest";
import "@testing-library/jest-dom/extend-expect";

//COMPONENTS
import MainLogo from "../../../components/MainLogo";

//ASSETS
import Logo from "../../../assets/logos/aerolab-logo.svg";

describe("MainLogo Test", () => {
  test("MainLogo renders without crashing", () => {
    render(<MainLogo logoSrc={Logo} />);
  });

  test("MainLogo has image", () => {
    const { getByRole } = render(<MainLogo logoSrc={Logo} />);
    const logo = getByRole("img");

    expect(logo).toHaveAttribute("src", Logo);
    expect(logo).toHaveAttribute("alt", "Logo");
  });
});
