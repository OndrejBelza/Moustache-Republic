import { FC } from "react";
import "./CartDropdown.css";
import { CartItem } from "../../types";

export type CartDropDownProps = {
  items: CartItem[];
};

export const CartDropDown: FC<CartDropDownProps> = ({ items }) => {
  return (
    <div id="cart-dropdown">
      {items.length < 1 && <p className="text-center">Cart is empty</p>}
      {items.map((item) => (
        <div className="dropdown-cart-item" key={`${item.id}-${item.size.id}`}>
          <img
            className="dropdown-cart-item-image"
            src={item.imageURL}
            alt={`${item.title}`}
          />
          <div>
            <p>{item.title}</p>
            <p className="font-small">
              {item.quantity}x{" "}
              <span className="font-bold">${item.price.toFixed(2)}</span>
            </p>
            <p className="font-small">Size: {item.size.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
