import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LazyLoadImage from "../../components/lazyLoadImg/lazyLoadImg";
import { AddCart } from "../../redux/store/shopping/cart";
import { getProductsFromServer } from "../../redux/store/shopping/products";
const Store = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  // console.log("products = ", products);

  useEffect(() => {
    dispatch(getProductsFromServer("/products"));
  }, []);

  return (
    <>
      <section className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mt-2 m-md-3">
        {products.map((product) => (
          <div className="col" key={product.id}>
            <div className="card">
              <LazyLoadImage
                src={product.productUrl}
                alt={product.alt}
                height={400}
                className="card-img-top"
              />
              <div className="card-body">
                <p className="card-text">{product.description} </p>
                <div className="d-flex justify-content-between align-items-center mt-2">
                  <button
                    type="button"
                    className="btn btn-outline-dark"
                    onClick={() => {
                      dispatch(AddCart(product));
                    }}
                  >
                    add to cart
                  </button>
                  <small className="text-muted">price: {product.price} $</small>
                </div>
              </div>
            </div>
          </div>
          //   <Product key={product.id} {...product}/>
        ))}
      </section>
    </>
  );
};

export default Store;
