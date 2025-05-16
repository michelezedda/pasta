import { FaCheck } from "react-icons/fa";
import type { ProductCardProps } from "../types/orderTypes";

const ProductCard = ({
  size,
  name,
  price,
  img,
  isSelected,
  handleSelection,
}: ProductCardProps) => {
  return (
    <>
      <div
        className={`relative border-2 border-dotted border-neutral-800 rounded-2xl p-4 cursor-pointer active:scale-98 flex flex-col justify-center items-center ${
          isSelected && "border-double"
        }`}
        onClick={handleSelection}
      >
        {img && (
          <img
            src={img}
            alt={name}
            className="w-22 cursor-pointer active:scale-98"
          />
        )}
        <span>{size && `${size}`}</span>
        <p className="text-xl flex flex-col text-center">
          {name}
          {price && (
            <span className="font-bold text-sm text-[#c97800]">$ {price}</span>
          )}
        </p>
        {isSelected && (
          <span className="absolute -bottom-3 rounded-full bg-neutral-800 p-1.5 text-white">
            <FaCheck size={12} />
          </span>
        )}
      </div>
    </>
  );
};

export default ProductCard;
