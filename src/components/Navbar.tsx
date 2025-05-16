import { IoMdLogIn } from "react-icons/io";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="relative flex gap-4 w-full bg-[#f49506] px-6 py-2 rounded-full justify-between items-center shadow-lg shadow-black">
      <Link to={"/"}>
        <img src="/media/logo.jpg" alt="logo" className="w-26" />
      </Link>
      <MdOutlineRestaurantMenu
        size={36}
        className="text-[#0c0a20] cursor-pointer xl:hidden active:scale-98"
        onClick={handleMenu}
      />
      {isOpen && (
        <ul
          className={`absolute xl:hidden left-0 top-20 bg-[#f49506] px-10 py-6 z-10 flex-col gap-4 text-white text-lg font-semibold w-full rounded-2xl shadow-lg shadow-black ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          <li className="bg-[#0c0a20] rounded-full px-4 py-2 shadow-md shadow-black cursor-pointer active:scale-98">
            Start your order
          </li>
          <li className="bg-[#0c0a20] rounded-full px-4 py-2 shadow-md shadow-black cursor-pointer active:scale-98">
            Our pasta
          </li>
          <li className="bg-[#0c0a20] rounded-full px-4 py-2 shadow-md shadow-black cursor-pointer active:scale-98">
            Our gelatos
          </li>
          <li className="bg-[#0c0a20] rounded-full px-4 py-2 shadow-md shadow-black cursor-pointer active:scale-98">
            Our challenge
          </li>
          <li className="bg-[#0c0a20] rounded-full px-4 py-2 shadow-md shadow-black cursor-pointer active:scale-98">
            Loyalty program
          </li>
        </ul>
      )}
      <ul className="p-2 hidden xl:flex gap-4 text-lg font-semibold text-white">
        <li className="bg-[#0c0a20] rounded-full px-4 py-2 shadow-sm shadow-black cursor-pointer active:scale-98">
          Start your order
        </li>
        <li className="bg-[#0c0a20] rounded-full px-4 py-2 shadow-sm shadow-black cursor-pointer active:scale-98">
          Our pasta
        </li>
        <li className="bg-[#0c0a20] rounded-full px-4 py-2 shadow-sm shadow-black cursor-pointer active:scale-98">
          Our gelatos
        </li>
        <li className="bg-[#0c0a20] rounded-full px-4 py-2 shadow-sm shadow-black cursor-pointer active:scale-98">
          Our challenge
        </li>
        <li className="bg-[#0c0a20] rounded-full px-4 py-2 shadow-sm shadow-black cursor-pointer active:scale-98">
          Loyalty program
        </li>
      </ul>
      <Link to={"/login"}>
        <button className="bg-[#0c0a20] text-white rounded-full px-4 py-2 shadow-sm shadow-black cursor-pointer active:scale-98 flex gap-2 justify-center items-center font-semibold text-lg">
          <IoMdLogIn size={22} />
          Log In
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
