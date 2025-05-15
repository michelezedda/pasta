import { FaCheck } from "react-icons/fa";

const ProductCard = ({ size, name, img }) => {
  return (
    <div
      className={`border-2 border-dotted border-neutral-800 rounded-2xl p-2`}
    >
      <img
        src={img}
        alt={name}
        className="w-22 cursor-pointer active:scale-98"
      />
      <span>{name}</span>
    </div>
  );
};

export default ProductCard;
