export type MenuItem = {
  id: number;
  name: string;
  img?: string;
  price?: number;
};

export type PastaSize = MenuItem;

export type PastaType = MenuItem;

export type PastaSauce = MenuItem;

export type PastaSide = MenuItem;

export type PastaTopping = MenuItem;

export type Drink = MenuItem;

export type PastaMenu = {
  sizes: PastaSize[];
  types: PastaType[];
  sauces: PastaSauce[];
  sides: PastaSide[];
  toppings: PastaTopping[];
};

export type Menu = {
  pasta: PastaMenu;
  drinks: Drink[];
};
