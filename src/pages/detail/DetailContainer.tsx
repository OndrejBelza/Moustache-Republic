import { FC, useEffect, useState } from "react";
import { DetailPage } from "./Detail";
import { Product, SizeOption } from "./types";
import { Loading } from "../loading";
import { ErrorPage } from "../error";

export type DetailContainerProps = {
  addProductToCart: (product: Product, selectedSize: SizeOption) => void;
};

export const DetailContainer: FC<DetailContainerProps> = ({
  addProductToCart,
}) => {
  const [product, setProduct] = useState<Product | undefined>();
  const [error, setError] = useState<string | undefined>();
  const [addToCartError, setAddToCartError] = useState<string | undefined>();
  const [sizeOption, setSizeOption] = useState<SizeOption | undefined>();

  const onAddToCart = () => {
    if (!product) {
      setAddToCartError("Product not found");
      return;
    }

    if (!sizeOption) {
      setAddToCartError("Size must be selected");
      return;
    }

    setAddToCartError(undefined);
    addProductToCart(product, sizeOption);
  };

  useEffect(() => {
    fetch(
      "https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product"
    )
      .then((result) => result.json().then((product) => setProduct(product)))
      .catch((error) => setError((error as Error).message));
  }, []);

  return (
    <>
      {!product && !error && <Loading />}
      {product && !error && (
        <DetailPage
          product={product}
          selectedSize={sizeOption}
          onSizeSelect={setSizeOption}
          onAddToCart={onAddToCart}
          addToCartError={addToCartError}
        />
      )}
      {!product && error && <ErrorPage errorMessage={error} />}
    </>
  );
};
