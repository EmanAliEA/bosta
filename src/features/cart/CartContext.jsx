import { createContext, useContext, useEffect, useReducer } from "react";

// make context api in seperate file
const CartContext = createContext(null);
const initialState = {
  cart: [],
  total: 0,
  error: "",
};
function reducer(state, action) {
  switch (action.type) {
    case "addCart":
      return { ...state, cart: [...state.cart, action.payload] };
    case "updateCart":
      return { ...state, cart: action.payload };
    case "totalCost":
      return {
        ...state,
        total: state.cart?.reduce(
          (acc, curr) => (acc += curr.price * curr.quantity),
          0
        ),
      };
    case "error":
      return { ...state, error: action.payload };
  }
}

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { total, error, cart } = state;

  useEffect(() => {
    dispatch({ type: "totalCost" });
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        error,
        dispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCartContext() {
  const context = useContext(CartContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside CartProvider");
  return context;
}

export { CartProvider, useCartContext };
