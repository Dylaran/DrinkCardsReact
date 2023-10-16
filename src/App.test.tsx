import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./App";

test("Renders the application", () => {
  render(<App />);
  const titleElement = screen.getByText(/Welcome Holiday Text/i);
  expect(titleElement).toBeInTheDocument();
});

test("X button is not visible by default", () => {
  render(<App />);
  const exitIcon = screen.queryByTestId("exit-icon");
  expect(exitIcon).not.toBeInTheDocument(); // Exit icon is not on the screen
  fireEvent.click(screen.getByTestId(1)); // Click on any of the images
  const exitIcon1 = screen.getByTestId("exit-icon");
  expect(exitIcon1).toBeInTheDocument(); // Exit icon is on the screen
  fireEvent.click(exitIcon1); // Click on the exit icon
  expect(exitIcon).not.toBeInTheDocument(); // Exit icon is not on the screen
});

test("Hovering image shows a different image", async () => {
  render(<App />);
  const image1 = screen.getByAltText("Boozy Hot Chocolate Front"); // Front picture
  expect(image1).toHaveProperty("alt", "Boozy Hot Chocolate Front");
  fireEvent.mouseEnter(image1);
  const image2 = screen.getByAltText("Boozy Hot Chocolate Back"); // Back picture
  expect(image2).toHaveProperty("alt", "Boozy Hot Chocolate Back");
});
