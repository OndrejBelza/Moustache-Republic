export type CartItem = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  imageURL: string;
  size: { id: number; label: string };
};
