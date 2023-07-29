export type SizeOption = {
  id: number;
  label: string;
};

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  imageURL: string;
  sizeOptions: SizeOption[];
};
