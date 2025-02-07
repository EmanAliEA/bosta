import { createContext, useContext, useEffect, useReducer } from "react";
import { getApiProducts, getCategories } from "../../services/apiProducts";

// make context api in seperate file
const ProductContext = createContext(null);
const initialState = {
  products: [],
  pageProducts: [],
  loading: false,
  sortVal: "",
  numPage: 1,
};
function reducer(state, action) {
  switch (action.type) {
    case "getApiData":
      return { ...state, products: action.payload, loading: false };
    case "productsPerPage":
      return {
        ...state,
        pageProducts: state.products.slice(action.payload, action.payload + 10),
      };
    case "changePage":
      return { ...state, numPage: action.payload + 1 };
    case "sortData":
      return { ...state, products: action.payload, numPage: 1 };
    case "sortValue":
      return { ...state, sortVal: action.payload };

    case "isLoading":
      return { ...state, loading: true };
    default:
      throw new Error("Unknown action: " + action.type);
  }
}

function ProductProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { products, loading, pageProducts, numPage, sortVal } = state;

  useEffect(() => {
    dispatch({ type: "productsPerPage", payload: (numPage - 1) * 10 });
  }, [products, numPage]);
  useEffect(
    function () {
      let sortedProducts;
      if (sortVal === "category") {
        sortedProducts = [...products].sort((a, b) =>
          a.category.localeCompare(b.category)
        );
      } else if (sortVal === "desc") {
        sortedProducts = [...products].sort((a, b) => b.price - a.price);
      } else if (sortVal === "asc") {
        sortedProducts = [...products].sort((a, b) => a.price - b.price);
      } else {
        sortedProducts = products;
      }
      dispatch({ type: "sortData", payload: sortedProducts });
      dispatch({ type: "productsPerPage", payload: numPage * 10 });
    },
    [sortVal]
  );
  useEffect(function () {
    const abortController = new AbortController(); // Step 1: Create an AbortController instance
    async function displayProducts() {
      dispatch({ type: "isLoading" });
      const data = await getApiProducts({ signal: abortController.signal });
      console.log(data);
      dispatch({ type: "getApiData", payload: data });
      dispatch({ type: "productsPerPage", payload: 0 });
    }
    displayProducts();
    return () => {
      abortController.abort(); // Step 3: Cleanup function to abort the request
    };
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        sortVal,
        pageProducts,
        numPage,
        dispatch,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

function useProductContext() {
  const context = useContext(ProductContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside AuthProvider");
  return context;
}

export { ProductProvider, useProductContext };
