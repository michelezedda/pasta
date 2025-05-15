import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="flex flex-col gap-6 bg-[#f49506] rounded-4xl p-6 mt-6 font-semibold shadow-lg shadow-black">
        <div>
          <div className="h-150 xl:h-200 bg-[url(./media/meal-bg.jpg)] bg-center bg-cover rounded-3xl shadow-lg shadow-black">
            <div className="flex flex-col gap-4 h-150 xl:h-200  p-4 justify-center items-center bg-black/40 rounded-3xl">
              <h1 className="text-3xl xl:text-4xl text-white font-bold text-center">
                PASTA UNITES AND MAKES HAPPY
              </h1>
              <p className="text-white xl:text-xl">How hungry are you today?</p>
              <Link to={"/order"}>
                <button className="bg-[#f49506] rounded-full px-4 py-2 shadow-md shadow-black cursor-pointer active:scale-98 flex gap-2 justify-center items-center font-semibold text-xl xl:text-2xl">
                  ORDER NOW
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row gap-6">
          <div className="h-150 bg-[url(./media/pesto-bg.jpg)] bg-center bg-cover rounded-3xl shadow-lg shadow-black flex-1/2">
            <div className="flex flex-col gap-4 h-150 p-4 justify-center items-center bg-black/20 rounded-3xl">
              <p className="text-white text-2xl xl:text-xl">Join the</p>
              <h2 className="text-3xl xl:text-4xl text-white font-bold text-center">
                PASTA RE-EVOLUTION
              </h2>
              <Link to={"/loyalty"}>
                <button className="bg-[#f49506] rounded-full px-4 py-2 shadow-md shadow-black cursor-pointer active:scale-98 flex gap-2 justify-center items-center font-semibold text-xl xl:text-2xl">
                  SIGN UP FOR LOYALTY
                </button>
              </Link>
            </div>
          </div>
          <div className="h-150 bg-[url(./media/farm-bg.jpg)] bg-[50%_30%] bg-cover rounded-3xl shadow-lg shadow-black flex-1/2">
            <div className="flex flex-col gap-4 h-150 p-4 justify-center items-center bg-black/20 rounded-3xl">
              <h2 className="text-3xl xl:text-4xl text-white font-bold text-center">
                Believing in the power of food: a daily choice to protect the
                planet
              </h2>
              <Link to={"/our-challenge"}>
                <button className="bg-[#f49506] rounded-full px-4 py-2 shadow-md shadow-black cursor-pointer active:scale-98 flex gap-2 justify-center items-center font-semibold text-xl xl:text-2xl">
                  OUR CHALLENGE
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
