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
import { ReactComponent as ChevronDown } from "../../../assets/icons/chevron-down.svg";
import { ReactComponent as Coin } from "../../../assets/icons/coin.svg";

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
      <DropDownButton menuItems={dropDownItems} open={false} toggle={jest.fn}>
        <span>5000</span>
        <ChevronDown />
      </DropDownButton>
    );
  });

  test("Dropdown button contains info", () => {
    const { getByText } = render(
      <DropDownButton menuItems={dropDownItems} open={false} toggle={jest.fn}>
        <Coin />
        <span>5000</span>
        <ChevronDown />
      </DropDownButton>
    );

    const points = getByText(/5000/i);
    const coin = getByText(/coin.svg/i);
    const chevronDown = getByText(/chevron-down.svg/i);

    expect(points).toBeInTheDocument;
    expect(coin).toBeInTheDocument;
    expect(chevronDown).toBeInTheDocument;
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
