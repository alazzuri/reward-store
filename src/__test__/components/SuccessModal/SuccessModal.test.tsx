//REACT
import React from "react";

//TESTING METHODS
import { render } from "../../setupTest";
import "@testing-library/jest-dom/extend-expect";

//COMPONENTS
import SuccessModal from "../../../components/SuccessModal";

//ASSETS
import animationData from "../../../assets/lotties/treasure-box-coine.json";

describe("SuccessModal test", () => {
  test("SuccessModal renders without crashing", () => {
    render(<SuccessModal animationData={animationData} earnedCoins={2000} />);
  });

  test("SuccessModal has sinfo", () => {
    const { getByText } = render(
      <SuccessModal animationData={animationData} earnedCoins={2000} />
    );

    const youGotLabel = getByText(/You got/i);
    const earnedCoinsLabel = getByText(/2,000 coins/i);

    expect(youGotLabel).toBeInTheDocument();
    expect(earnedCoinsLabel).toBeInTheDocument();
  });
});
