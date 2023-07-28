import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../../components/product/product';
import { getProductsFromServer } from '../../redux/store/shopping/products';

const Store = () => {
   const products = useSelector((state)=> state.products)
   const dispatch = useDispatch();
   console.log('products = ',products );

   useEffect(() => {
      dispatch(getProductsFromServer("/products"))
    },[])
 
    return ( 
        <>
        <section className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mt-2 m-3">
          {products.map((product)=>(
              <div className="col " key={product.id}> 
              <Product {...product}/>
            </div>
         ))}
        </section>
        </>
     );
}
 
export default Store;