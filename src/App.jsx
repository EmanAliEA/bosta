import "./styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductList from "./features/product/ProductList";
import ProductDetails from "./features/product/ProductDetails";
import AppLayout from "./ui/AppLayout";
import CreateProduct from "./features/product/CreateProduct";
import Cart from "./features/cart/Cart";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <ProductList /> },
      { path: "/productDetails/:id", element: <ProductDetails /> },
      { path: "/createProduct", element: <CreateProduct /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} basename="/bosta" />;
}
