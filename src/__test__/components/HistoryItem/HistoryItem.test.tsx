//REACT
import React from "react";

//TESTING METHODS
import { render } from "../../setupTest";
import "@testing-library/jest-dom/extend-expect";

//COMPONENTS
import HistoryItem from "../../../components/HistoryItem";

//MOCKS
import { mockedHistoryItem } from "../../mock/history";

//UTILS
import { formatNumber } from "../../../utils/data";

describe("HistoryItem test", () => {
  test("HistoryItem renders without crashing", () => {
    render(
      <HistoryItem
        name={mockedHistoryItem.name}
        category={mockedHistoryItem.category}
        cost={mockedHistoryItem.cost}
        img={mockedHistoryItem.img}
        createDate={mockedHistoryItem.date}
      />
    );
  });

  test("HistoryItem has image", () => {
    const { getByRole } = render(
      <HistoryItem
        name={mockedHistoryItem.name}
        category={mockedHistoryItem.category}
        cost={mockedHistoryItem.cost}
        img={mockedHistoryItem.img}
        createDate={mockedHistoryItem.date}
      />
    );

    const img = getByRole("img");
    expect(img).toBeInTheDocument;
    expect(img).toHaveAttribute("src", mockedHistoryItem.img.url);
    expect(img).toHaveAttribute("alt", mockedHistoryItem.name);
  });

  test("HistoryItem has product info", () => {
    const { getByText } = render(
      <HistoryItem
        name={mockedHistoryItem.name}
        category={mockedHistoryItem.category}
        cost={mockedHistoryItem.cost}
        img={mockedHistoryItem.img}
        createDate={mockedHistoryItem.date}
      />
    );

    const name = getByText(mockedHistoryItem.name);
    const category = getByText(mockedHistoryItem.category);
    const cost = getByText(`${formatNumber(mockedHistoryItem.cost)}`);
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
        img={mockedHistoryItem.img}
        createDate={mockedHistoryItem.date}
      />
    );

    const coin = getByText(/coin.svg/i);

    expect(coin).toBeInTheDocument;
  });
});
