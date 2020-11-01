//REACT
import React from "react";

//TESTING METHODS
import { render, userEvent } from "../../setupTest";
import { waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

//PAGES
import NotFoundPage from "../../../pages/404";

//ASSETS
import NotFoundImage from "../../../assets/images/404.png";

describe("NotFoundPage test", () => {
  test("NotFoundPage renders without crashing", () => {
    render(<NotFoundPage />);
  });

  test("NotFoundPage has content", async () => {
    const { getByRole, getByText } = render(<NotFoundPage />);

    const pageTitle = getByText(/Not Found/i);
    const pageImage = getByRole("img");
    const backToHomeButton = getByRole("link", { name: "Back to Home" });

    expect(pageTitle).toBeInTheDocument();
    expect(pageImage).toHaveAttribute("src", NotFoundImage);
    expect(pageImage).toHaveAttribute("alt", "not-found");
    expect(backToHomeButton).toBeInTheDocument();

    userEvent.click(backToHomeButton);

    await waitFor(() =>
      expect(window.location.href).toEqual("http://localhost/")
    );
  });
});
