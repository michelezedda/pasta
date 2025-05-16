import type {
  PastaSize,
  PastaType,
  PastaSauce,
  PastaSide,
  PastaTopping,
  Drink,
} from "../types/menuTypes";
import type { OrderData } from "../types/orderTypes";
import menu from "../data/menu";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const Order = () => {
  const [isFixed, setIsFixed] = useState<boolean>(false);
  const [orderData, setOrderData] = useState<OrderData>({
    size: "",
    type: "",
    sauce: "",
    side: "",
    topping: "",
    drink: "",
  });

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
            <h2 className="text-2xl">Make your own pasta</h2>
            <div className="flex flex-col mt-4">
              <h4 className="text-lg mb-4">Select size</h4>
              <div className="flex gap-4 items-center">
                {menu.pasta.sizes.map((size: PastaSize) => (
                  <ProductCard
                    key={size.id}
                    {...size}
                    isSelected={orderData.size === size.id}
                    handleSelection={() =>
                      setOrderData((prev) => ({ ...prev, size: size.id }))
                    }
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col mt-4">
              <h4 className="text-lg my-4">Select type</h4>
              <div className="grid grid-cols-3 gap-4 text-md">
                {menu.pasta.types.map((type: PastaType) => (
                  <ProductCard
                    key={type.id}
                    {...type}
                    isSelected={orderData.type === type.id}
                    handleSelection={() =>
                      setOrderData((prev) => ({ ...prev, type: type.id }))
                    }
                  />
                ))}
              </div>
              <div className="flex flex-col mt-4">
                <h4 className="text-lg my-4">Select sauce</h4>
                <div className="grid grid-cols-3 gap-4 text-md text-center">
                  {menu.pasta.sauces.map((sauce: PastaSauce) => (
                    <ProductCard
                      key={sauce.id}
                      {...sauce}
                      isSelected={orderData.sauce === sauce.id}
                      handleSelection={() => {
                        setOrderData((prev) => ({ ...prev, sauce: sauce.id }));
                      }}
                    />
                  ))}
                </div>
                <div className="flex flex-col mt-4">
                  <h4 className="text-lg my-4">Select a side</h4>
                  <div className="grid grid-cols-3 gap-4 text-md text-center">
                    {menu.pasta.sides.map((side: PastaSide) => (
                      <ProductCard
                        key={side.id}
                        {...side}
                        isSelected={orderData.side === side.id}
                        handleSelection={() => {
                          setOrderData((prev) => ({ ...prev, side: side.id }));
                        }}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex flex-col mt-4">
                  <h4 className="text-lg my-4">Select a topping</h4>
                  <div className="grid grid-cols-3 gap-4 text-md text-center">
                    {menu.pasta.toppings.map((topping: PastaTopping) => (
                      <ProductCard
                        key={topping.id}
                        {...topping}
                        isSelected={orderData.topping === topping.id}
                        handleSelection={() => {
                          setOrderData((prev) => ({
                            ...prev,
                            topping: topping.id,
                          }));
                        }}
                      />
                    ))}
                  </div>
                  <div className="flex flex-col mt-4">
                    <h4 className="text-lg my-4">Select a drink</h4>
                    <div className="grid grid-cols-3 gap-4 text-md text-center">
                      {menu.drinks.map((drink: Drink) => (
                        <ProductCard
                          key={drink.id}
                          {...drink}
                          isSelected={orderData.drink === drink.id}
                          handleSelection={() => {
                            setOrderData((prev) => ({
                              ...prev,
                              drink: drink.id,
                            }));
                          }}
                        />
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
              isFixed && "xl:fixed xl:-top-3 xl:xl:w-[500px]"
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
