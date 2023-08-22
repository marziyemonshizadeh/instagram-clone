import React from "react";
import { useSelector } from "react-redux";
import CartItems from "../../components/cartItems/cartItems";
import EmptyCart from "../../components/emptyCart/emptyCart";
export default function cart() {
  const { cart } = useSelector((item) => item.cart);
  console.log("cart=", cart);

  return (
    <div className="container">
      {cart.length ? <CartItems /> : <EmptyCart />}
    </div>
  );
}
