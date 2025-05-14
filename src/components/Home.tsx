import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="flex flex-col gap-6 lg:w-2/3 bg-[#f49506] rounded-4xl p-4 mt-6 font-semibold shadow-lg shadow-black">
        <div className="h-150 bg-[url(./media/meal-bg.jpg)] bg-center bg-cover rounded-3xl shadow-lg shadow-black">
          <div className="flex flex-col gap-4 h-150 p-4 justify-center items-center bg-black/40 rounded-3xl">
            <h1 className="text-3xl text-white font-bold text-center">
              PASTA UNITES AND MAKES HAPPY
            </h1>
            <p className="text-white">How hungry are you today?</p>
            <Link to={"/order"}>
              <button className="bg-[#f49506] rounded-full px-4 py-2 shadow-md shadow-[#0c0a20]/50 cursor-pointer active:scale-98 flex gap-2 justify-center items-center font-semibold text-xl">
                ORDER NOW
              </button>
            </Link>
          </div>
        </div>
        <div className="h-150 bg-[url(./media/pesto-bg.jpg)] bg-center bg-cover rounded-3xl shadow-lg shadow-black">
          <div className="flex flex-col gap-4 h-150 p-4 justify-center items-center bg-black/20 rounded-3xl">
            <p className="text-white text-2xl">Join the</p>
            <h2 className="text-3xl text-white font-bold text-center">
              PASTA RE-EVOLUTION
            </h2>
            <Link to={"/order"}>
              <button className="bg-[#f49506] rounded-full px-4 py-2 shadow-md shadow-[#0c0a20]/50 cursor-pointer active:scale-98 flex gap-2 justify-center items-center font-semibold text-xl">
                SIGN UP FOR LOYALTY
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
