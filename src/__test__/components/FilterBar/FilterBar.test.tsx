//REACT
import React from "react";

//TESTING METHODS
import { render, userEvent } from "../../setupTest";
import "@testing-library/jest-dom/extend-expect";

//COMPONENTS
import FilterBar from "../../../components/FilterBar";

//MOCKS
import { mockedCatalog } from "../../mock/product";

//UTILS
import { createFilters } from "../../../utils/filters";

describe("FilterBar test", () => {
  test("FilterBar renders without crashing", () => {
    render(
      <FilterBar
        handleNext={jest.fn()}
        handlePrev={jest.fn()}
        maxItems={mockedCatalog.length}
        currentItems={mockedCatalog.length}
        filterItems={createFilters(["Women", "Phones"])}
        handleSelect={jest.fn()}
        filters={{}}
        handleClear={jest.fn()}
      />
    );
  });

  test("FilterBar has text", () => {
    const { getByText } = render(
      <FilterBar
        handleNext={jest.fn()}
        handlePrev={jest.fn()}
        maxItems={mockedCatalog.length}
        currentItems={mockedCatalog.length}
        filterItems={createFilters(["Women", "Phones"])}
        handleSelect={jest.fn()}
        filters={{}}
        handleClear={jest.fn()}
      />
    );

    const paginationText = getByText(/2 of 2/i);
    const filterBarTitle = getByText(/Sort By/i);

    expect(paginationText).toBeInTheDocument;
    expect(filterBarTitle).toBeInTheDocument;
  });

  test("FilterBar has filter buttons", () => {
    const { getByText, getAllByText } = render(
      <FilterBar
        handleNext={jest.fn()}
        handlePrev={jest.fn()}
        maxItems={mockedCatalog.length}
        currentItems={mockedCatalog.length}
        filterItems={createFilters(["Women", "Phones"])}
        handleSelect={jest.fn()}
        filters={{}}
        handleClear={jest.fn()}
      />
    );

    const categoryLabel = getByText(/All Categories/i);
    const priceLabel = getByText(/Price/i);
    const clearButton = getByText(/Clear Filters/i);
    const dropdownIcons = getAllByText(/chevron-down.svg/i);

    expect(categoryLabel).toBeInTheDocument;
    expect(priceLabel).toBeInTheDocument;
    expect(clearButton).toBeInTheDocument;
    expect(dropdownIcons.length).toBe(2);
  });

  test("Dropdown buttons show filters. Clear button is clickable", () => {
    console.log = jest.fn();

    const { getByText } = render(
      <FilterBar
        handleNext={jest.fn()}
        handlePrev={jest.fn()}
        maxItems={mockedCatalog.length}
        currentItems={mockedCatalog.length}
        filterItems={createFilters(["Women", "Phones"])}
        handleSelect={jest.fn()}
        filters={{}}
        handleClear={() => console.log("Filters were cleared")}
      />
    );

    const categoriesButton = getByText(/All categories/i);
    const priceButton = getByText(/Price/i);
    const clearButton = getByText(/Clear Filters/i);

    userEvent.click(categoriesButton);
    const womenLabel = getByText(/Women/i);
    const phonesLabel = getByText(/Phones/i);

    expect(womenLabel).toBeInTheDocument();
    expect(phonesLabel).toBeInTheDocument();

    userEvent.click(priceButton);
    const topToBottomLabel = getByText(/Top to Bottom/i);
    const bottomToTopLabel = getByText(/Bottom to Top/i);

    expect(topToBottomLabel).toBeInTheDocument();
    expect(bottomToTopLabel).toBeInTheDocument();

    userEvent.click(clearButton);
    expect(console.log).toHaveBeenCalledWith("Filters were cleared");
  });
});
