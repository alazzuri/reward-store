//REACT
import React from "react";

//TESTING METHODS
import { render } from "../../setupTest";
import "@testing-library/jest-dom/extend-expect";

//COMPONENTS
import Header from "../../../components/Header";
import MainLogo from "../../../components/MainLogo";
import DropDownButton, {
  DropDownMenu,
} from "../../../components/DropdownButton";
import Banner from "../../../components/Banner";

//ASSETS
import Logo from "../../../assets/logos/aerolab-logo.svg";
import MainImage from "../../../assets/images/header-x1.png";
import MainImage2x from "../../../assets/images/header-x2.png";

//CONSTANTS
import { dropDownItems } from "../../../constants/dropdown";

describe("Header Test", () => {
  test("Header render without crashing", () => {
    render(<Header />);
  });

  test("Header has logo", () => {
    const { getByRole } = render(<MainLogo logoSrc={Logo} />);
    const logo = getByRole("img");

    expect(logo).toHaveAttribute("src", Logo);
  });

  test("Header has username", () => {
    const { getByText } = render(<Header />);
    const user = getByText(/Julia Coi/i);

    expect(user).toBeInTheDocument;
  });

  test("Dropdown button renders without crashing", () => {
    render(
      <DropDownButton
        points={5000}
        menuItems={dropDownItems}
        open={false}
        toggle={jest.fn}
      />
    );
  });

  test("Dropdown button contains info", () => {
    const { getByText } = render(
      <DropDownButton
        points={5000}
        menuItems={dropDownItems}
        open={false}
        toggle={jest.fn}
      />
    );

    const points = getByText(/5000/i);

    expect(points).toBeInTheDocument;
  });

  test("Dropdown menu renders without crashing", () => {
    render(<DropDownMenu menuItems={dropDownItems} />);
  });

  test("Dropdown menu contains info", () => {
    const { getByText } = render(<DropDownMenu menuItems={dropDownItems} />);

    const getPoints = getByText(/Get more points/i);
    const signOut = getByText(/Sign out/i);

    expect(getPoints).toBeInTheDocument;
    expect(signOut).toBeInTheDocument;
  });

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
