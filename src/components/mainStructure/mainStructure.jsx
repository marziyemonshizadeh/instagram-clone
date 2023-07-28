import React from 'react';
import { Outlet } from 'react-router-dom';

import Sidebar from '../sidebar/sidebar';

import './mainStructure.css';
 
function Main() {
  return (
     <div className='row w-100'>
          <section className='col-2'>
             <Sidebar/>
          </section>  
          <section className='col-10 mb-3'>
             <Outlet/> 
          </section>
     </div>
  )
}

export default Main