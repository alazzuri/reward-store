//REACT
import React from "react";

//TESTING METHODS
import { render } from "../../setupTest";
import "@testing-library/jest-dom/extend-expect";

//COMPONENTS
import DropDownButton, {
  DropDownMenu,
} from "../../../components/DropdownButton";

//ASSETS
import { ReactComponent as ChevronDown } from "../../../assets/icons/chevron-down.svg";
import { ReactComponent as Coin } from "../../../assets/icons/coin.svg";

//CONSTANTS
import { dropDownItems } from "../../../constants/dropdown";

describe("DropdownButton Test", () => {
  test("Dropdown button renders without crashing", () => {
    render(
      <DropDownButton menuItems={dropDownItems} open={false} toggle={jest.fn()}>
        <span>5000</span>
        <ChevronDown />
      </DropDownButton>
    );
  });

  test("Dropdown button contains childrens", () => {
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

  test("Dropdown menu contains buttons", () => {
    const { getByText } = render(<DropDownMenu menuItems={dropDownItems} />);

    const home = getByText(/Home/i);
    const getPoints = getByText(/Get more points/i);
    const history = getByText(/History/i);

    expect(home).toBeInTheDocument;
    expect(getPoints).toBeInTheDocument;
    expect(history).toBeInTheDocument;
  });
});
