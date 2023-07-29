import { useState } from "react";
import "./App.css";
import { CartItem, DefaultLayoutContainer } from "./layout/default";
import { DetailContainer, Product, SizeOption } from "./pages/detail";

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addProductToCart = (
    { id, price, title, imageURL }: Product,
    selectedSize: SizeOption
  ) => {
    const productInCartIndex = cart.findIndex(
      (cartItem) => cartItem.id === id && cartItem.size.id === selectedSize.id
    );

    if (productInCartIndex !== -1) {
      setCart(
        cart.map((item, index) =>
          index !== productInCartIndex
            ? item
            : { ...item, quantity: item.quantity + 1 }
        )
      );
    } else {
      setCart([
        ...cart,
        {
          id,
          price,
          title,
          size: { id: selectedSize.id, label: selectedSize.label },
          quantity: 1,
          imageURL,
        },
      ]);
    }
  };
  return (
    <DefaultLayoutContainer cart={cart}>
      <DetailContainer addProductToCart={addProductToCart} />
    </DefaultLayoutContainer>
  );
}

export default App;
