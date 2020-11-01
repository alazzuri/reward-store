//REACT
import React from "react";

//TESTING METHODS
import { render, userEvent, waitFor } from "../../setupTest";
import "@testing-library/jest-dom/extend-expect";

//COMPONENTS
import PointsPicker, {
  PointPrizes,
  StartButton,
} from "../../../components/PointsPicker";

//CONSTANTS
import { prizePoints } from "../../../constants/earnPoints";

describe("PointsPicker test", () => {
  console.log = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("PointsPicker renders without crashing", () => {
    render(<PointsPicker onFinishPicking={console.log} />);
  });

  test("PointsPrizes component renders without crashing", () => {
    render(<PointPrizes prizePoints={prizePoints} selectedIndex={0} />);
  });

  test("StartButton component renders without crashing", () => {
    render(
      <StartButton
        isDisabled={false}
        handleClick={() => console.log("Button clicked")}
      />
    );
  });

  test("PointsPicker picks a prize", async () => {
    const { getByRole } = render(
      <PointsPicker onFinishPicking={console.log} />
    );

    const pickButton = getByRole("button");

    userEvent.click(pickButton);

    await waitFor(console.log);

    expect(console.log).toHaveBeenCalled();
  });

  test("StartButton has label and is clickable when enabled", () => {
    const { getByRole, getByText } = render(
      <StartButton
        isDisabled={false}
        handleClick={() => console.log("Button clicked")}
      />
    );

    const button = getByRole("button");
    const buttonLabel = getByText(/Get Points!/i);

    userEvent.click(button);

    expect(buttonLabel).toBeInTheDocument();
    expect(console.log).toHaveBeenCalledWith("Button clicked");
  });

  test("StartButton has label and is not clickable when enabled", () => {
    const { getByRole, getByText } = render(
      <StartButton
        isDisabled={true}
        handleClick={() => console.log("Button clicked")}
      />
    );

    const button = getByRole("button");
    const buttonLabel = getByText(/Good Luck!/i);

    userEvent.click(button);

    expect(buttonLabel).toBeInTheDocument();
    expect(console.log).not.toHaveBeenCalled();
  });
});
