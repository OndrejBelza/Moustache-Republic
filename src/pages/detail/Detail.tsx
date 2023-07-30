import { FC } from "react";
import { Product, SizeOption } from "./types";
import "./Detail.css";
import { ErrorAlert } from "../../components/errorAlert";

export type DetailPageProps = {
  product: Product;
  selectedSize: SizeOption | undefined;
  onSizeSelect: (size: SizeOption) => void;
  onAddToCart: () => void;
  addToCartError?: string;
};

export const DetailPage: FC<DetailPageProps> = ({
  product: { id, description, imageURL, price, sizeOptions, title },
  selectedSize,
  onSizeSelect,
  onAddToCart,
  addToCartError,
}) => {
  return (
    <div id="product-wrapper">
      <img src={imageURL} alt={title} id="product-image" />
      <aside>
        <h1>{title}</h1>
        <hr />
        <h2 className="product-price">${price.toFixed(2)}</h2>
        <hr />
        <p className="text-light">{description}</p>
        <p>
          SIZE<span className="text-required">*</span>:{" "}
        </p>
        <div>
          {sizeOptions.map((sizeOption) => (
            <button
              key={sizeOption.id}
              onClick={() => onSizeSelect(sizeOption)}
              className={`size-button ${
                selectedSize?.id === sizeOption?.id
                  ? "size-button-selected"
                  : "text-light"
              }`}
            >
              {sizeOption.label}
            </button>
          ))}
        </div>

        <button onClick={onAddToCart} id="add-to-cart-button">
          add to cart
        </button>

        {addToCartError && <ErrorAlert>{addToCartError}</ErrorAlert>}
      </aside>
    </div>
  );
};
