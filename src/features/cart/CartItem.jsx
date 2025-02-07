import Button from "../../ui/Button";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useCartContext } from "./CartContext";
function CartItem({ item }) {
  const { cart, dispatch } = useCartContext();
  const [quantity, setQuant] = useState(item.quantity);
  function incQuan() {
    console.log(quantity);
    setQuant((pre) => ++pre);
  }
  function decQuan() {
    if (quantity > 0) setQuant((pre) => --pre);
  }
  function handleRemove() {
    const newCart = cart.filter((elem) => elem.id !== item.id);
    dispatch({ type: "updateCart", payload: newCart });
  }

  useEffect(() => {
    const newCart = cart.map((elem) => {
      if (elem.id === item.id) elem.quantity = quantity;
      console.log(item);
    });
    dispatch({ type: "totalCost" });
  }, [quantity]);
  return (
    <li className="border-2 border-indigo-100 rounded-xl shadow-xl w-[100%] h-[300px] sm:h-[350px] md:h-[300px] sm:w-[45%] md:w-[30%] flex flex-col justify-center  px-4 py-3 ">
      <img
        src={item.image}
        alt="itemImg"
        className="w-[30%] sm:w-[50%] md:w-[30%] m-auto"
      />
      <div className="p-2 space-y-2 ">
        <p className="font-bold text-sm">{item.title}</p>
        <p>
          <span className="font-semibold">Price</span>: {item.price}$
        </p>
      </div>
      <div className="flex items-center px-2 justify-between">
        <p>
          <span className="font-semibold">Quntitiy</span>: {quantity}
        </p>
        <div className="space-x-2">
          <Button
            style=" !p-1 ! !bg-none sm:text-sm sm:px-2 md:text-sm md:px-1 lg:px-3 "
            action={incQuan}
          >
            <FaPlus className="text-sm font-bold" />
          </Button>
          <Button
            style=" !p-1 sm:text-sm sm:px-2 md:text-sm md:px-1 lg:px-3"
            action={decQuan}
          >
            <FaMinus className="text-sm font-bold" />
          </Button>
          <Button
            style=" !p-1 sm:text-sm sm:px-2 md:text-sm md:px-1 lg:px-3"
            action={handleRemove}
          >
            <FaTrash className="text-sm font-bold" />
          </Button>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
