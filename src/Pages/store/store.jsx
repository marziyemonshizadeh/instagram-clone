import lodash from 'lodash';
import React, { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import apiRequests from '../../Services/axios/Configs/configs';


const Store = () => {
  const [products, setProducts] = useState();
    useEffect(() => {
        getAllProducts();
    },[])

    const getAllProducts=()=>{
        apiRequests.get("/products")
        .then(res => setProducts(res.data))
        .catch((err) => {
            console.log(err)})
    } 
    return ( 
        <>
        <section className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mt-2 m-3">
          { 
            lodash.map(products,(product)=>(
            <div className="col " key={product.id}> 
              <div className="card ">
                <LazyLoadImage src={product.productUrl} height={400} alt={product.alt}/>
                <div className="card-body">
                  <p className="card-text">{product.description} </p>
                  <div className="d-flex justify-content-between align-items-center mt-2">
                    <button type="button" className="btn btn-outline-dark">add to cart</button>
                    <small className="text-muted">price: {product.price}</small>
                  </div>
                </div>
              </div> 
            </div> 
            ))
          }
        </section>
        </>
     );
}
 
export default Store;