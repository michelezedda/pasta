export type OrderData = {
  size: string;
  type: string;
  sauce: string;
  side: string;
  topping: string;
  drink: string;
};

export type ProductCardProps = {
  size?: string;
  name: string;
  price?: number;
  img?: string;
  isSelected?: boolean;
  handleSelection?: () => void;
};
