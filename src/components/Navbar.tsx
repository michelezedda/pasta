import { IoBagHandle } from "react-icons/io5";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
        className="text-[#0c0a20] cursor-pointer lg:hidden active:scale-98"
        onClick={handleMenu}
      />
      {isOpen && (
        <ul
          className={`absolute lg:hidden left-0 top-20 bg-[#f49506] px-10 py-6 z-10 flex-col gap-4 text-white text-xl font-semibold w-full rounded-2xl shadow-lg shadow-black ${
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
            Loyalty program
          </li>
        </ul>
      )}
      <ul className="bg-neutral-300 p-2 hidden lg:flex gap-4 text-xl font-semibold">
        <li className="bg-neutral-100 rounded-full px-4 py-2 shadow-md cursor-pointer active:scale-98">
          Start your order
        </li>
        <li className="bg-neutral-100 rounded-full px-4 py-2 shadow-md cursor-pointer active:scale-98">
          Our pasta
        </li>
        <li className="bg-neutral-100 rounded-full px-4 py-2 shadow-md cursor-pointer active:scale-98">
          Our gelatos
        </li>
        <li className="bg-neutral-100 rounded-full px-4 py-2 shadow-md cursor-pointer active:scale-98">
          Loyalty program
        </li>
      </ul>
      <Link to={"/cart"}>
        <button className="bg-red-600 text-white rounded-full px-4 py-2 shadow-md shadow-[#0c0a20]/40 cursor-pointer active:scale-98 flex gap-2 justify-center items-center font-semibold text-xl">
          <IoBagHandle size={22} />
          Cart
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
