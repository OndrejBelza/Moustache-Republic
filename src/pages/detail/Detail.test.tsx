import { render, screen } from "@testing-library/react";
import { DetailPage } from "./Detail";
import { Product } from "./types";

test("renders product detail", () => {
  const product: Product = {
    id: 1,
    description: "product description",
    imageURL: "example.com",
    price: 30,
    sizeOptions: [
      { id: 1, label: "S" },
      { id: 2, label: "M" },
    ],
    title: "Product title",
  };
  render(
    <DetailPage
      product={product}
      onAddToCart={() => {}}
      onSizeSelect={() => {}}
      selectedSize={product.sizeOptions.at(0)}
    />
  );

  const productDescription = screen.getByText("product description");
  expect(productDescription).toBeInTheDocument();

  const productTitle = screen.getByText("Product title");
  expect(productTitle).toBeInTheDocument();

  for (const size of product.sizeOptions) {
    const sizeOption = screen.getByText(size.label);
    expect(sizeOption).toBeInTheDocument();
  }
});
