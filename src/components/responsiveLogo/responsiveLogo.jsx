import LazyImg from '../lazyLoadImg/lazyLoadImg'
import InstagramLogo from '../../assets/Instagram_Logo.png' 

import '../responsiveLogo/responsiveLogo.css'
export function LogoImg (){
    return ( 
        <div className='my-2'>
          <p className='fw-bold fs-3 mt-3 instagram-logo d-md-none d-block'>
            Instagram
          </p>
          <div className='d-md-block d-none'>
              <LazyImg src={InstagramLogo} alt="instagramLogo" className="img-fluid" width={200} height={10}/>
          </div>
        </div>
     );
}
 
export default LogoImg;