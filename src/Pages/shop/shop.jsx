import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LazyLoadImage from "../../components/lazyLoadImg/lazyLoadImg";
import { AddCart } from "../../redux/store/shopping/cart";
import { getProductsFromServer } from "../../redux/store/shopping/products";
const Store = () => {
  const isItemExist = (itemToFindId) => {
    return cart.findIndex((item) => item.id === itemToFindId) === -1;
  };
  const products = useSelector((state) => state.products);
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
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
                <div className="d-flex justify-content-between align-items-center g-5 mt-2">
                  <button
                    type="button"
                    className="btn btn-outline-dark"
                    disables={() => isItemExist(product.id)}
                    onClick={() => {
                      dispatch(AddCart(product));
                      isItemExist(product.id);
                    }}
                  >
                    add to cart
                  </button>
                  <small className="text-muted">
                    price: {product.price.toLocaleString()} $
                  </small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Store;
