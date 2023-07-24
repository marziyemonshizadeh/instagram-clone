import React from 'react'
import { Link } from 'react-router-dom';

import profile from '../../assets/marzii.jpg'
import '../suggested/s.css'
const Suggested = () => {
    return ( 
        <div className="row">
            <div className="col-12 col-xl-10">
              <div className="row">
                 <div className="col-12 col-xl-4">
                    <img src={profile} className='rounded-circle img-fluid m-2 profile' alt='profile'/>
                 </div>
                 <div className="col-12 col-xl-8">
                    <div  className="row">
                        <div className="col-12 col-lg-9 d-flex flex-column mt-2">
                              <div className='fw-bold'>UserName</div>
                              <div className='text-muted'>Suggested for you</div>
                        </div>
                        <div className="col-12 col-lg-3  pt-lg-4">
                           <Link to='/main' className='text-decoration-none text-center' onClick={()=>console.log('cliked')}>Follow</Link>
                        </div>
                    </div>
                 </div>
              </div>
            </div>
            {/* <div className="col-12 col-xl-2 pt-4 bg-light">
               <Link to='/main' className='text-decoration-none text-center' onClick={()=>console.log('cliked')}>Follow</Link>
            </div> */}
        </div>
     );
}
 
export default Suggested;