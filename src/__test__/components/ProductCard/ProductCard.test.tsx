//REACT
import React from "react";

//TESTING METHODS
import { render, userEvent } from "../../setupTest";
import "@testing-library/jest-dom/extend-expect";

//COMPONENTS
import Card, { DefaultView, RedeemView } from "../../../components/Card";

//MOCKS
import { mockedProduct } from "../../mock/product";

describe("Product Card test", () => {
  test("Card renders without crashing", () => {
    render(
      <Card
        name={mockedProduct.name}
        category={mockedProduct.category}
        requiredPoints={mockedProduct.cost}
        imgSrc={mockedProduct.img.url}
        onHandleClick={() => console.log("Clicked")}
      />
    );
  });

  test("Default view renders without crashing", () => {
    render(
      <DefaultView
        name={mockedProduct.name}
        category={mockedProduct.category}
        imgSrc={mockedProduct.img.url}
      />
    );

    render(
      <DefaultView
        name={mockedProduct.name}
        category={mockedProduct.category}
        imgSrc={mockedProduct.img.url}
        remainingPoints={2000}
      />
    );
  });

  test("Default View has shop icon when user has enough points", () => {
    const { getByText } = render(
      <DefaultView
        name={mockedProduct.name}
        category={mockedProduct.category}
        imgSrc={mockedProduct.img.url}
      />
    );

    const shopImg = getByText(/buy-blue.svg/i);

    expect(shopImg).toBeInTheDocument;
  });

  test("Default View has alternative button when user has not enough points", () => {
    const { getByText } = render(
      <DefaultView
        name={mockedProduct.name}
        category={mockedProduct.category}
        imgSrc={mockedProduct.img.url}
        remainingPoints={2000}
      />
    );

    const notRedeemableButton = getByText("You need 2,000");

    expect(notRedeemableButton).toBeInTheDocument;
  });

  test("Default view has image", () => {
    const { getByRole } = render(
      <DefaultView
        name={mockedProduct.name}
        category={mockedProduct.category}
        imgSrc={mockedProduct.img.url}
      />
    );

    const img = getByRole("img");
    expect(img).toBeInTheDocument;
    expect(img).toHaveAttribute("src", mockedProduct.img.url);
    expect(img).toHaveAttribute("alt", `product-${mockedProduct.name}`);
  });

  test("Default view has product info", () => {
    const { getByText } = render(
      <DefaultView
        name={mockedProduct.name}
        category={mockedProduct.category}
        imgSrc={mockedProduct.img.url}
      />
    );

    const category = getByText(mockedProduct.category);
    const name = getByText(mockedProduct.name);

    expect(category).toBeInTheDocument;
    expect(name).toBeInTheDocument;
  });

  test("Redeem view renders without crashing", () => {
    const { getByTestId } = render(
      <RedeemView
        show={true}
        requiredPoints={mockedProduct.cost}
        onHandleClick={() => console.log("Clicked")}
      />
    );

    const container = getByTestId("container");

    expect(container).toHaveAttribute("class", "block");
  });

  test("Redeem view hidden if hover if false", () => {
    const { getByTestId } = render(
      <RedeemView
        show={false}
        requiredPoints={mockedProduct.cost}
        onHandleClick={() => console.log("Clicked")}
      />
    );

    const container = getByTestId("container");

    expect(container).toHaveAttribute("class", "hidden");
  });

  test("Redeem View has icons", () => {
    const { getByText } = render(
      <RedeemView
        show={true}
        requiredPoints={mockedProduct.cost}
        onHandleClick={() => console.log("Clicked")}
      />
    );

    const shopImg = getByText(/buy-white.svg/i);
    const coin = getByText("coin.svg");

    expect(shopImg).toBeInTheDocument;
    expect(coin).toBeInTheDocument;
  });

  test("Default View has points info", () => {
    const { getByText } = render(
      <RedeemView
        show={true}
        requiredPoints={mockedProduct.cost}
        onHandleClick={() => console.log("Clicked")}
      />
    );

    const points = getByText("200");

    expect(points).toBeInTheDocument;
  });

  test("Default View has redeem button", () => {
    console.log = jest.fn();

    const { getByRole } = render(
      <RedeemView
        show={true}
        requiredPoints={mockedProduct.cost}
        onHandleClick={() => console.log("Clicked")}
      />
    );

    const redeemButton = getByRole("button");
    userEvent.click(redeemButton);

    expect(redeemButton).toBeInTheDocument;
    expect(redeemButton).toHaveTextContent("Redeem Now");
    expect(console.log).toHaveBeenCalledWith("Clicked");
  });
});
