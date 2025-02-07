import { Outlet } from "react-router";
import React from "react";
import Nav from "./Nav";
import { ProductProvider } from "../features/product/ProductContext";
import { CartProvider } from "../features/cart/CartContext";

function AppLayout() {
  return (
    <ProductProvider>
      <CartProvider>
        <div className="space-y-6">
          <Nav />
          <Outlet />
        </div>
      </CartProvider>
    </ProductProvider>
  );
}

export default AppLayout;
