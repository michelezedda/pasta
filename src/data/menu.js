const menu = {
  pasta: {
    sizes: [
      { id: 0, name: "S: 120g", price: 8.98 },
      { id: 1, name: "M: 240g", price: 10.98 },
      { id: 2, name: "L: 360g", price: 12.98 },
      { id: 3, name: "XL: 480g", price: 14.98 },
    ],
    types: [
      { id: 0, name: "Tagliatelle", img: "/media/tagliatelle.png" },
      { id: 1, name: "Farfalle", img: "/media/farfalle.png" },
      { id: 2, name: "Rigatoni", img: "/media/rigatoni.png" },
      { id: 3, name: "Rotini", img: "/media/rotini.png" },
      { id: 4, name: "Spaghetti", img: "/media/spaghetti.png" },
      { id: 5, name: "Shells", img: "/media/shells.png" },
      { id: 6, name: "Penne", img: "/media/penne.png" },
    ],
    sauces: [
      { id: 0, name: "Tomato sauce", img: "/media/tomato.png", price: 2.98 },
      { id: 1, name: "Pesto sauce", img: "/media/pesto.png", price: 3.98 },
      {
        id: 2,
        name: "Carbonara sauce",
        img: "/media/carbonara.png",
        price: 4.98,
      },
      { id: 3, name: "Alfredo sauce", img: "/media/alfredo.png", price: 3.98 },
      { id: 4, name: "Bolognese", img: "/media/bolognese.png", price: 4.98 },
      {
        id: 5,
        name: "Cacio & pepe",
        img: "/media/cacio-pepe.png",
        price: 3.98,
      },
    ],
    toppings: [
      { id: 0, name: "Parmesan", img: "/media/parmesan.png", price: 3 },
      { id: 1, name: "Bacon", img: "/media/bacon.png", price: 3 },
      { id: 2, name: "Grilled chicken", img: "/media/chicken.png", price: 6 },
      { id: 3, name: "Tofu", img: "/media/tofu.png", price: 4 },
      { id: 4, name: "Basil", img: "/media/basil.png", price: 1 },
      { id: 5, name: "Parsley", img: "/media/parsley.png", price: 1 },
    ],
  },
  drinks: [
    { id: 0, name: "Water", img: "/media/water.png", price: 2 },
    { id: 1, name: "Coke", img: "/media/coke.png", price: 4 },
    { id: 2, name: "Coke zero", img: "/media/coke-zero.png", price: 4 },
    { id: 3, name: "Diet coke", img: "/media/diet-coke.png", price: 4 },
    { id: 4, name: "Fanta", img: "/media/fanta.png", price: 4 },
    { id: 5, name: "Sprite", img: "/media/sprite.png", price: 4 },
  ],
  gelatos: [
    { id: 0, name: "Pistachio", img: "/media/pistachio.png", price: 3.98 },
    { id: 1, name: "Vanilla", img: "/media/vanilla.png", price: 3.98 },
    { id: 2, name: "Strawberry", img: "/media/strawberry.png", price: 3.98 },
    { id: 3, name: "Melon", img: "/media/melon.png", price: 3.98 },
  ],
};

export default menu;
