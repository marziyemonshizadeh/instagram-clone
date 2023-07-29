import React from 'react';
import LazyLoadImage from '../lazyLoadImg/lazyLoadImg';

export default function Product({productUrl,alt,description,price}) {
  return (
    <div className="col ">
        <div className="card">
            <LazyLoadImage src={productUrl} alt={alt}/>
            <div className="card-body">
                <p className="card-text">{description} </p>
                <div className="d-flex justify-content-between align-items-center mt-2">
                    <button type="button" className="btn btn-outline-dark">add to cart</button>
                    <small className="text-muted">price: {price}</small>
                </div>
            </div>
        </div>
    </div>
        
  )
}
