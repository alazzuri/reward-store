//REACT
import React from "react";

//TESTING METHODS
import { render, userEvent } from "../../setupTest";
import "@testing-library/jest-dom/extend-expect";

//COMPONENTS
import ProductsContainer, {
  ProductCards,
  LoadingSkeletons,
} from "../../../containers/ProductsContainer";

//MOCKED DATA
import { mockedCatalog } from "../../mock/product";

describe("ProductsContainer test", () => {
  console.log = jest.fn();
  test("ProductsContainer renders without crashing", () => {
    render(
      <ProductsContainer
        products={mockedCatalog}
        onHandleRedeem={() => console.log("Redeem pressed")}
      />
    );
  });

  test("LoadingSkeleton component renders without crashing", () => {
    render(<LoadingSkeletons amount={16} />);
  });

  test("ProductCards component renders without crashing", () => {
    render(
      <ProductCards
        products={mockedCatalog}
        handleClick={() => console.log("Redeem pressed")}
      />
    );
  });

  test("ProductsContainer has product info (if enough points)", () => {
    const { getByText, getByRole } = render(
      <ProductsContainer
        products={mockedCatalog}
        onHandleRedeem={() => console.log("Redeem pressed")}
      />
    );

    const productImage = getByRole("img", {
      name: "product-Sandalia Pale Gold YSL",
    });
    const productName = getByText(/Sandalia Pale Gold YSL/i);
    const productCost = getByText(/200/i);
    const productCategory = getByText(/Shoes/i);
    const redeemButton = getByRole("button", { name: "Redeem Now" });

    userEvent.click(redeemButton);

    expect(productImage).toHaveAttribute(
      "src",
      "https://coding-challenge-api.aerolab.co/images/Alienware13-x2.png"
    );
    expect(productName).toBeInTheDocument();
    expect(productCost).toBeInTheDocument();
    expect(productCategory).toBeInTheDocument();
    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith("Redeem pressed");
  });

  test("ProductsContainer has product info (if no enough points)", () => {
    const { getByText, getByRole } = render(
      <ProductsContainer
        products={mockedCatalog}
        onHandleRedeem={() => console.log("Redeem pressed")}
      />
    );

    const productName = getByText(/Iphone/i);
    const productCategory = getByText(/Phones/i);
    const productImage = getByRole("img", { name: "product-Iphone" });
    const remainingPoints = getByText(/You need 300/i);

    expect(productImage).toHaveAttribute(
      "src",
      "https://coding-challenge-api.aerolab.co/images/Alienware13-x2.png"
    );
    expect(productName).toBeInTheDocument();
    expect(productCategory).toBeInTheDocument();
    expect(remainingPoints).toBeInTheDocument();
  });
});
