//REACT
import React from "react";

//TESTING METHODS
import { render } from "../../setupTest";
import "@testing-library/jest-dom/extend-expect";

//COMPONENTS
import HistoryItem from "../../../components/HistoryItem";

//MOCKS
import { mockedHistoryItem } from "../../mock/history";

describe("HistoryItem test", () => {
  test("HistoryItem renders without crashing", () => {
    render(
      <HistoryItem
        name={mockedHistoryItem.name}
        category={mockedHistoryItem.category}
        cost={mockedHistoryItem.cost}
        imgSrc={mockedHistoryItem.imgSrc}
        date={mockedHistoryItem.date}
      />
    );
  });

  test("HistoryItem has image", () => {
    const { getByRole } = render(
      <HistoryItem
        name={mockedHistoryItem.name}
        category={mockedHistoryItem.category}
        cost={mockedHistoryItem.cost}
        imgSrc={mockedHistoryItem.imgSrc}
        date={mockedHistoryItem.date}
      />
    );

    const img = getByRole("img");
    expect(img).toBeInTheDocument;
    expect(img).toHaveAttribute("src", mockedHistoryItem.imgSrc);
    expect(img).toHaveAttribute("alt", `product-${mockedHistoryItem.name}`);
  });

  test("HistoryItem has product info", () => {
    const { getByText } = render(
      <HistoryItem
        name={mockedHistoryItem.name}
        category={mockedHistoryItem.category}
        cost={mockedHistoryItem.cost}
        imgSrc={mockedHistoryItem.imgSrc}
        date={mockedHistoryItem.date}
      />
    );

    const name = getByText(mockedHistoryItem.name);
    const category = getByText(mockedHistoryItem.category);
    const cost = getByText(mockedHistoryItem.cost.toLocaleString());
    const date = getByText(mockedHistoryItem.date.toLocaleString());

    expect(category).toBeInTheDocument;
    expect(name).toBeInTheDocument;
    expect(cost).toBeInTheDocument;
    expect(date).toBeInTheDocument;
  });

  test("HistoryItem has icon", () => {
    const { getByText } = render(
      <HistoryItem
        name={mockedHistoryItem.name}
        category={mockedHistoryItem.category}
        cost={mockedHistoryItem.cost}
        imgSrc={mockedHistoryItem.imgSrc}
        date={mockedHistoryItem.date}
      />
    );

    const coin = getByText(/coin.svg/i);

    expect(coin).toBeInTheDocument;
  });
});
