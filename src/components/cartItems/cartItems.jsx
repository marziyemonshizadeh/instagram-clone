import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { ClearAllItems, RemoveFromCart } from "../../redux/store/shopping/cart";

export default function CartItems() {
  const { cart } = useSelector((item) => item.cart);

  const dispatch = useDispatch();
  return (
    <>
      <header className="d-flex justify-content-between fs-4 my-3">
        <p>Shoping cart</p>
        <p>items : {cart.length}</p>
      </header>
      {/* table */}
      <div className="text-center d-none d-md-block">
        <div className="row">
          <div className="col-2">product</div>
          <div className="col-4">description</div>
          <div className="col-3">price</div>
          <div className="col-3">delete</div>
        </div>
      </div>
      {cart.map((item) => (
        <div className="container my-3" key={item.id}>
          <div className="row cart shadow-sm bg-body-tertiary rounded text-center p-1">
            <div className="col-6 col-md-2">
              <img
                className="img-fluid rounded-circle"
                src={item.productUrl}
                alt={item.alt}
                style={{ width: "50px", height: "50px" }}
              />
            </div>

            <div className="col-6 col-md-4 py-3">{item.description}</div>
            <div className="col-6 col-md-3 py-3">
              {item.price.toLocaleString()} $
            </div>
            <div className="col-6 col-md-3 py-3 ">
              <AiTwotoneDelete
                style={{ fill: "#E817B3" }}
                onClick={() => {
                  dispatch(RemoveFromCart(item));
                  console.log("i want delete product in cart");
                }}
              />
            </div>
          </div>
        </div>
      ))}
      <hr />
      {/* price */}
      <div className="d-flex justify-content-between fs-4 my-3">
        <p>
          Total Price :
          {cart
            .reduce((total, item) => {
              return total + item.price;
            }, 0)
            .toLocaleString()}
          $
        </p>
        <button
          type="button"
          className="btn btn-light"
          onClick={() => {
            dispatch(ClearAllItems());
          }}
        >
          Clear All Items
        </button>
      </div>
      <div className="d-flex justify-content-center">
        <button type="button" className="btn btn-dark">
          Check out
        </button>
      </div>
    </>
  );
}
