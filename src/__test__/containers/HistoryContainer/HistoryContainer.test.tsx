//REACT
import React from "react";

//TESTING METHODS
import { render } from "../../setupTest";
import "@testing-library/jest-dom/extend-expect";

//COMPONENTS
import HistoryContainer, {
  HistoryCards,
  LoadingSkeletons,
  TableHeading,
} from "../../../containers/HistoryContainer";

//MOCKED DATA
import { mockedHistoryList } from "../../mock/history";

describe("HistoryContainer test", () => {
  test("HistoryContainer renders without crashing", () => {
    render(<HistoryContainer redeemHistory={mockedHistoryList} />);
  });

  test("TableHeading component renders without crashing", () => {
    render(<TableHeading />);
  });

  test("LoadingSkeletons component renders without crashing", () => {
    render(<LoadingSkeletons amount={6} />);
  });

  test("HistoryCards component renders without crashing", () => {
    render(<HistoryCards historyItems={mockedHistoryList} />);
  });

  test("HistoryContainer has table headings", () => {
    const { getByText } = render(
      <HistoryContainer redeemHistory={mockedHistoryList} />
    );

    const photoHeading = getByText(/Photo/i);
    const productHeading = getByText(/Product/i);
    const costHeading = getByText(/Cost/i);
    const dateHeading = getByText(/Date/i);

    expect(photoHeading).toBeInTheDocument();
    expect(productHeading).toBeInTheDocument();
    expect(costHeading).toBeInTheDocument();
    expect(dateHeading).toBeInTheDocument();
  });

  test("HistoryContainer has product info", () => {
    const { getByText, getByRole } = render(
      <HistoryContainer redeemHistory={mockedHistoryList} />
    );

    const photo = getByRole("img", { name: "Kodak 234" });
    const product = getByText(/Kodak 234/i);
    const category = getByText(/Cameras/i);
    const cost = getByText(/10,000/i);
    const date = getByText(/05-23-2020/i);

    expect(photo).toHaveAttribute("src", "https://picsum.photos/200");
    expect(product).toBeInTheDocument();
    expect(category).toBeInTheDocument();
    expect(cost).toBeInTheDocument();
    expect(date).toBeInTheDocument();
  });
});
