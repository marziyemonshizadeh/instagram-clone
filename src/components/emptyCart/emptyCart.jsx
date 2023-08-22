import React from "react";
import { useNavigate } from "react-router-dom";

export default function emptyCart() {
  const navigate = useNavigate();
  return (
    <main className="text-center m-md-5 mt-4 mt-md-2">
      <div className="p-5 rounded lh-lg">
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-5521508-4610092.png"
          alt="emptyCart"
          className="img-fluid"
        />
        <h1 className="fs-3 fw-bolder">Your Cart is currently empty</h1>
        <p className="lead">
          Before proceed to checkout , you must add some products to your cart.
          You will find a lot of interesting products on our "Shop" page.
        </p>
        <button
          type="button"
          class="btn btn-light"
          onClick={() => {
            navigate("/main/shop");
          }}
        >
          RETURN TO SHOP
        </button>
      </div>
    </main>
  );
}
