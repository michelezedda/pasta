import { useState } from "react";
import { FaCheck } from "react-icons/fa";

const Order = () => {
  const [isSizeSelected, setIsSizeSelected] = useState(false);
  const [isTypeSelected, setIsTypeSelected] = useState(false);
  const [isSauceSelected, setIsSauceSelected] = useState(false);
  const [isToppingSelected, setIsToppingSelected] = useState(false);

  const handleSelection = () => {
    setIsSizeSelected((prevState) => !prevState);
  };

  return (
    <div className="lg:w-2/3 bg-neutral-200 rounded-4xl p-4 mt-6 text-[#0c0a20] font-semibold bg-[url(./media/background.png)] bg-no-repeat bg-top-right pt-50 shadow-lg shadow-black">
      <div className="flex flex-col">
        <h2 className="text-2xl">Make your pasta</h2>
        <div className="flex flex-col mt-4">
          <h4 className="text-lg">Select size</h4>
          <ul className="flex gap-6 items-center">
            <li
              className={`relative cursor-pointer active:scale-98 border-2 border-dotted border-neutral-800 rounded-full px-4 py-2 ${
                isSizeSelected && "border-double"
              }`}
              onClick={handleSelection}
            >
              120g
              {isSizeSelected && (
                <span className="absolute -bottom-3 left-6 rounded-full bg-neutral-800 p-1.5 text-white">
                  <FaCheck size={12} />
                </span>
              )}
            </li>

            <li>240g</li>
            <li>360g</li>
            <li>480g</li>
          </ul>
        </div>
        <div className="flex flex-col mt-4">
          <h4 className="text-lg">Select type</h4>
          <div className="flex gap-4 text-md text-center items-center">
            <div
              className={`border-2 border-dotted border-neutral-800 rounded-2xl p-2 ${
                isTypeSelected && "border-double"
              }`}
            >
              <img
                src="/media/tagliatelle.png"
                alt="tagliatelle pasta"
                className="w-22 cursor-pointer active:scale-98"
              />
              <span>Tagliatelle</span>
            </div>
            <div>
              <img
                src="/media/farfalle.png"
                alt="farfalle pasta"
                className="w-22 cursor-pointer active:scale-98"
              />
              <span>Farfalle</span>
            </div>
            <div>
              <img
                src="/media/rigatoni.png"
                alt="rigatoni pasta"
                className="w-22 cursor-pointer active:scale-98"
              />
              <span>Rigatoni</span>
            </div>
            <div>
              <img
                src="/media/rotini.png"
                alt="rotini pasta"
                className="w-22 cursor-pointer active:scale-98"
              />
              <span>Rotini</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <h4 className="text-lg">Select sauce</h4>
          <div className="flex gap-4 text-md text-center items-center">
            <div>
              <img
                src="/media/tomato.png"
                alt="tomato sauce"
                className="w-22 cursor-pointer active:scale-98"
              />
              <span>Tomato sauce</span>
            </div>
            <div>
              <img
                src="/media/pesto.png"
                alt="pesto sauce"
                className="w-22 cursor-pointer active:scale-98"
              />
              <span>Pesto sauce</span>
            </div>
            <div>
              <img
                src="/media/carbonara.png"
                alt="carbonara sauce"
                className="w-22 cursor-pointer active:scale-98"
              />
              <span>Carbonara sauce</span>
            </div>
            <div>
              <img
                src="/media/alfredo.png"
                alt="alfredo sauce"
                className="w-22 cursor-pointer active:scale-98"
              />
              <span>Alfredo sauce</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <h4 className="text-lg">Select toppings</h4>
          <div className="flex gap-4 text-md text-center items-center">
            <div>
              <img
                src="/media/parmesan.png"
                alt="parmesan"
                className="w-22 cursor-pointer active:scale-98"
              />
              <span>Parmesan</span>
            </div>
            <div>
              <img
                src="/media/bacon.png"
                alt="bacon"
                className="w-22 cursor-pointer active:scale-98"
              />
              <span>Bacon</span>
            </div>
            <div>
              <img
                src="/media/chicken.png"
                alt="grilled chicken"
                className="w-22 cursor-pointer active:scale-98"
              />
              <span>Grilled chicken</span>
            </div>
            <div>
              <img
                src="/media/tofu.png"
                alt="tofu"
                className="w-22 cursor-pointer active:scale-98"
              />
              <span>Tofu</span>
            </div>
            <div>
              <img
                src="/media/basil.png"
                alt="basil"
                className="w-22 cursor-pointer active:scale-98"
              />
              <span>Basil</span>
            </div>
            <div>
              <img
                src="/media/parsley.png"
                alt="parsley"
                className="w-22 cursor-pointer active:scale-98"
              />
              <span>Parsley</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <h4 className="text-lg">Select a drink</h4>
          <div className="flex gap-4 text-md text-center items-center">
            <div>
              <img
                src="/media/water.png"
                alt="water box"
                className="w-22 cursor-pointer active:scale-98"
              />
              <span>Water box</span>
            </div>
            <div>
              <img
                src="/media/coke.png"
                alt="coke"
                className="w-22 cursor-pointer active:scale-98"
              />
              <span>Coke</span>
            </div>
            <div>
              <img
                src="/media/coke-zero.png"
                alt="coke zero"
                className="w-22 cursor-pointer active:scale-98"
              />
              <span>Coke zero</span>
            </div>
            <div>
              <img
                src="/media/diet-coke.png"
                alt="diet coke"
                className="w-22 cursor-pointer active:scale-98"
              />
              <span>Diet coke</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <h4 className="text-lg">Finish with a good gelato</h4>
          <div className="flex gap-4 text-md text-center items-center">
            <div>
              <img
                src="/media/vanilla.png"
                alt="vanilla gelato"
                className="w-22 cursor-pointer active:scale-98"
              />
              <span>Vanilla flavor</span>
            </div>
            <div>
              <img
                src="/media/pistachio.png"
                alt="pistachio gelato"
                className="w-22 cursor-pointer active:scale-98"
              />
              <span>Pistachio flavor</span>
            </div>
            <div>
              <img
                src="/media/strawberry.png"
                alt="strawberry gelato"
                className="w-22 cursor-pointer active:scale-98"
              />
              <span>Strawberry flavor</span>
            </div>
            <div>
              <img
                src="/media/melon.png"
                alt="melon gelato"
                className="w-22 cursor-pointer active:scale-98"
              />
              <span>Melon flavor</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
