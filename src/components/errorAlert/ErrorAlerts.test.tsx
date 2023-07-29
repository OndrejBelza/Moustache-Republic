import { render, screen } from "@testing-library/react";
import { ErrorAlert } from "./ErrorAlert";

test("renders error message", () => {
  render(<ErrorAlert>error message</ErrorAlert>);
  const errorMessage = screen.getByText("error message");

  expect(errorMessage).toBeInTheDocument();
  expect(errorMessage).toHaveClass("error-alert-wrapper");
});
