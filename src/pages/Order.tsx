import menu from "../data/menu";
import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";

const Order = () => {
  const [isSizeSelected, setIsSizeSelected] = useState(false);
  const [isTypeSelected, setIsTypeSelected] = useState(false);
  const [isSauceSelected, setIsSauceSelected] = useState(false);
  const [isToppingSelected, setIsToppingSelected] = useState(false);
  const [isDrinkSelected, setIsDrinkSelected] = useState(false);
  const [isGelatoSelected, setIsGelatoSelected] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const handleSelection = () => {
    setIsSizeSelected((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="flex flex-col xl:flex-row gap-6">
        <div className="xl:w-2/3 bg-neutral-200 rounded-4xl p-4 mt-6 text-[#0c0a20] font-semibold bg-[url(./media/background.png)] bg-no-repeat bg-top-right pt-50 shadow-lg shadow-black">
          <div className="flex flex-col">
            <h2 className="text-2xl">Make your pasta</h2>
            <div className="flex flex-col mt-4">
              <h4 className="text-lg mb-4">Select size</h4>
              <ul className="flex gap-4 items-center">
                {menu.pasta.sizes.map((size) => (
                  <li
                    key={size.id}
                    className={`relative cursor-pointer active:scale-98 border-2 border-dotted border-neutral-800 rounded-full px-4 py-2 ${
                      isSizeSelected && "border-double"
                    }`}
                    onClick={handleSelection}
                  >
                    <p className="text-xl flex flex-col text-center">
                      {size.name}
                      <span className="font-bold text-sm text-[#c97800]">
                        $ {size.price}
                      </span>{" "}
                    </p>

                    {isSizeSelected && (
                      <span className="absolute -bottom-3 left-6 rounded-full bg-neutral-800 p-1.5 text-white">
                        <FaCheck size={12} />
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col mt-4">
              <h4 className="text-lg my-4">Select type</h4>
              <div className="grid grid-cols-3 gap-4 text-md">
                {menu.pasta.types.map((type) => (
                  <div
                    key={type.id}
                    className={`border-2 border-dotted border-neutral-800 rounded-2xl p-2 flex flex-col justify-center items-center text-center ${
                      isTypeSelected && "border-double"
                    }`}
                  >
                    <img
                      src={type.img}
                      alt={type.name}
                      className="w-22 cursor-pointer active:scale-98"
                    />
                    <span>{type.name}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col mt-4">
                <h4 className="text-lg my-4">Select sauce</h4>
                <div className="grid grid-cols-3 gap-4 text-md text-center">
                  {menu.pasta.sauces.map((sauce) => (
                    <div
                      key={sauce.id}
                      className="flex flex-col justify-center items-center"
                    >
                      <img
                        src={sauce.img}
                        alt={sauce.name}
                        className="w-22 cursor-pointer active:scale-98"
                      />
                      <p className="text-xl flex flex-col text-center">
                        {sauce.name}
                        <span className="font-bold text-sm text-[#c97800]">
                          + $ {sauce.price}
                        </span>{" "}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col mt-4">
                  <h4 className="text-lg my-4">Select toppings</h4>
                  <div className="grid grid-cols-3 gap-4 text-md text-center">
                    {menu.pasta.toppings.map((topping) => (
                      <div
                        key={topping.id}
                        className="flex flex-col justify-center items-center"
                      >
                        <img
                          src={topping.img}
                          alt={topping.name}
                          className="w-22 cursor-pointer active:scale-98"
                        />
                        <p className="text-xl flex flex-col text-center">
                          {topping.name}
                          <span className="font-bold text-sm text-[#c97800]">
                            + $ {topping.price}
                          </span>{" "}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col mt-4">
                    <h4 className="text-lg my-4">Select a drink</h4>
                    <div className="grid grid-cols-3 gap-4 text-md text-center">
                      {menu.drinks.map((drink) => (
                        <div
                          key={drink.id}
                          className="flex flex-col justify-center items-center"
                        >
                          <img
                            src={drink.img}
                            alt={drink.name}
                            className="w-22 cursor-pointer active:scale-98"
                          />
                          <p className="text-xl flex flex-col text-center">
                            {drink.name}
                            <span className="font-bold text-sm text-[#c97800]">
                              + $ {drink.price}
                            </span>
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col mt-4">
                    <h4 className="text-lg my-4">Finish with a good gelato</h4>
                    <div className="grid grid-cols-4 gap-4 text-md text-center">
                      {menu.gelatos.map((gelato) => (
                        <div
                          key={gelato.id}
                          className="flex flex-col justify-center items-center"
                        >
                          <img
                            src={gelato.img}
                            alt={gelato.name}
                            className="w-22 cursor-pointer active:scale-98"
                          />
                          <p className="text-xl flex flex-col text-center">
                            {gelato.name}
                            <span className="font-bold text-sm text-[#c97800]">
                              + $ {gelato.price}
                            </span>
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:w-[500px]">
          <div
            className={`bg-neutral-200 rounded-4xl p-4 mt-6 text-[#0c0a20] font-semibold shadow-lg shadow-black ${
              isFixed && "xl:fixed xl:-top-3 xl:right-5 xl:xl:w-[480px]"
            }`}
          >
            <h2 className="text-2xl text-center">Your order</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
