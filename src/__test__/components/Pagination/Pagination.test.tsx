//REACT
import React from "react";

//TESTING METHODS
import { render, userEvent } from "../../setupTest";
import "@testing-library/jest-dom/extend-expect";

//COMPONENTS
import Pagination from "../../../components/Pagination";

describe("Pagination test", () => {
  console.log = jest.fn();

  test("Pagination renders without crashing", () => {
    render(
      <Pagination
        onClickPrev={() => console.log("Prev pressed")}
        onClickNext={() => console.log("Next pressed")}
        maxItems={32}
        currentItems={16}
      />
    );
  });

  test("Pagination has text", () => {
    const { getByText } = render(
      <Pagination
        onClickPrev={() => console.log("Prev pressed")}
        onClickNext={() => console.log("Next pressed")}
        maxItems={32}
        currentItems={16}
      />
    );

    const paginationText = getByText(/16 of 32/i);

    expect(paginationText).toBeInTheDocument;
  });

  test("Pagination renders childrens", () => {
    const { getByText } = render(
      <Pagination
        onClickPrev={() => console.log("Prev pressed")}
        onClickNext={() => console.log("Next pressed")}
        maxItems={32}
        currentItems={16}
      >
        <div>A children element</div>
      </Pagination>
    );

    const children = getByText("A children element");

    expect(children).toBeInTheDocument();
  });

  test("Pagination has icons", () => {
    const { getByText } = render(
      <Pagination
        onClickPrev={() => console.log("Button pressed")}
        onClickNext={() => console.log("Button pressed")}
        maxItems={32}
        currentItems={16}
      />
    );

    const chevronLeft = getByText(/arrow-left.svg/i);
    const chevronRight = getByText(/arrow-right.svg/i);

    expect(chevronLeft).toBeInTheDocument;
    expect(chevronRight).toBeInTheDocument;

    userEvent.click(chevronLeft);
    userEvent.click(chevronRight);

    expect(console.log).toHaveBeenCalledTimes(2);
  });
});
