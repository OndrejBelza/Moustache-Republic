import React, { FC } from "react";
import { CartItem } from "./types";
import "./DefaultLayout.css";
import { CartDropDown } from "./components/cartDropdown";

export type DefaultLayoutProps = {
  children: React.ReactNode;
  cart: CartItem[];
  isCartOpen: boolean;
  onCartClick: () => void;
};

export const DefaultLayout: FC<DefaultLayoutProps> = ({
  children,
  cart,
  onCartClick,
  isCartOpen,
}) => {
  return (
    <>
      <header>
        <div id="header-wrapper">
          <div id="cart-wrapper">
            <button
              className={`mini-cart-button text-light  ${
                isCartOpen ? "mini-cart-button-active" : ""
              }`}
              onClick={onCartClick}
            >
              <img
                src="./cart.svg"
                alt="shopping cart toggle"
                id="shopping-cart-toggle"
              />
              <span id="my-cart-text">My Cart </span>({" "}
              {cart.reduce((prev, cur) => prev + cur.quantity, 0)} )
            </button>
            {isCartOpen && <CartDropDown items={cart} />}
          </div>
        </div>
      </header>
      <div id="content">{children}</div>
    </>
  );
};
