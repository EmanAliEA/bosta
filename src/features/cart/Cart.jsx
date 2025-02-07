import CartItem from "./CartItem";
import { useCartContext } from "./CartContext";
function Cart() {
  const { cart, total } = useCartContext();
  console.log(cart);
  return (
    <div className="p-5 flex flex-col gap-4 items-center">
      <ul className="w-[90%] flex flex-wrap gap-3 items-center justify-center m-auto">
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </ul>
      <div className="shadow shadow-black w-[80%] text-center p-5 text-xl font-semibold">
        Total Cost: {Math.round(total)}$
      </div>
    </div>
  );
}

export default Cart;
