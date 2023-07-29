import { render, screen } from "@testing-library/react";
import { CartDropDown } from "./CartDropdown";
import { CartItem } from "../../types";

test("renders cart without items", () => {
  const items: CartItem[] = [];
  render(<CartDropDown items={items} />);
  const emptyCartMessage = screen.getByText("Cart is empty");

  expect(emptyCartMessage).toBeInTheDocument();
});
