import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { useSelector } from "react-redux";

export default function cart() {
  const { cart } = useSelector((item) => item.cart);
  return (
    <div className="container-lg">
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
            <div className="col-6 col-md-3 py-3">{item.price} $</div>
            <div className="col-6 col-md-3 py-3 ">
              <AiTwotoneDelete style={{ fill: "#E817B3" }} />
            </div>
          </div>
        </div>
      ))}
      {/* <p className="d-flex justify-content-center text-muted fs-4 my-3">
        Cart is empty
      </p> */}
      <hr />
      {/* price */}
      <p className="fs-4 my-3">
        Total Price :
        {cart.reduce((total, item) => {
          return total + item.price;
        }, 0)}
        $
      </p>
    </div>
  );
}
