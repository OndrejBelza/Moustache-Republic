import { FC, useState } from "react";
import { DefaultLayout } from "./DefaultLayout";
import { CartItem } from "./types";

export type DefaultLayoutContainerProps = {
  children: React.ReactNode;
  cart: CartItem[];
};

export const DefaultLayoutContainer: FC<DefaultLayoutContainerProps> = ({
  cart,
  children,
}) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen((state) => !state);
  };

  return (
    <>
      <DefaultLayout
        cart={cart}
        onCartClick={toggleCart}
        isCartOpen={isCartOpen}
      >
        {children}
      </DefaultLayout>
    </>
  );
};
