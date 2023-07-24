import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const MyImage = ({ alt,src,width,height }) => {
  // let defaultclassName='img-fluid';
  // height & weight dorost kon bazi ha lqazem nadaran
  //class name az prop bede
  return(
    <LazyLoadImage
    src={src}
    alt={alt}
    width={width}
    height={height}
    className='img-fluid  object-fit-contain '
    effect="blur"
    />
  )
}
export default MyImage;
