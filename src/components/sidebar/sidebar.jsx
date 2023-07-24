import React from 'react';
import { Link } from 'react-router-dom';

import { BiAddToQueue, BiStore } from 'react-icons/bi';
import { BsBoxArrowInLeft, BsBoxArrowRight, BsInfoCircle } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { FaRegHeart } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { LuSend } from 'react-icons/lu';
import { MdHomeFilled } from 'react-icons/md';
import { RiBookmarkLine } from 'react-icons/ri';
import InstagramLogo from '../../assets/Instagram_Logo.png';

import '../sidebar/sidebar.css';



export default function sidebar() {
  const sidebarItems =[
            {icon:MdHomeFilled,text:'Home', to:'/main'},
            {icon:BiStore,text:'Store', to:'/main/store'},
            {icon:BsBoxArrowInLeft,text:'Log in', to:'/login'},
            {icon:BiAddToQueue,text:'Create', to:'/main/create'},
            {icon:BsInfoCircle,text:'AboutMe', to:'/main/aboutme'},
            {icon:RiBookmarkLine,text:'Saves', to:'#'},
            {icon:FaRegHeart,text:'Likes', to:'#'},
            {icon:CgProfile,text:'Profile', to:'#'},
            {icon:LuSend,text:'Messages', to:'#'},
            {icon:BsBoxArrowRight,text:'Log out', to:'/'}
            // {icon:GiHamburgerMenu,text:'More',to:'#'}
  ]
  return (
            <div className='sticky-top sidebar w-auto ps-md-2'>
                <header>
                    <img src={InstagramLogo} className="rounded img-fluid m-1 ms-md-2 mt-4 img d-xl-block d-none" alt="instagramLogo" width={150}/>
                </header>
                <main className='nav d-flex justify-content-between flex-column mb-auto mt-1 mx-1'>
                    <div>
                        {sidebarItems.map((i,index)=>{
                            return (
                            <li className='nav-item sidebarItems' key={index} data-bs-toggle="tooltip" title={i.text}>   
                                <Link to={i.to} className="d-flex align-items-center py-md-3 py-3 px-2 rounded-3  overflow-hidden">
                                    <i.icon className='icons me-md-2 me-3'/>
                                    <span className="d-md-block d-none">{i.text}</span> 
                                </Link>
                            </li> 
                            )
                        })}
                    </div>
                    <li className='nav-item sidebarItems dropend' data-bs-toggle="tooltip" >   
                        <Link to='#' className="d-flex align-items-center btn py-md-3 py-3 px-2 rounded-3  overflow-hidden" data-bs-toggle="dropdown">
                            <GiHamburgerMenu className='icons me-md-2 me-3'/>
                            <span className="d-md-block d-none">More</span> 
                        </Link>
                        <ul className="dropdown-menu">
                          <li><Link to='#' className="dropdown-item" href="#">Delete Acount</Link></li>
                          <li><Link to='#' className="dropdown-item" href="#">Delete Acount</Link></li>
                          <li><Link to='#' className="dropdown-item" href="#">Delete Acount</Link></li>
                        </ul>
                    </li> 
                </main>  
            </div>
  )
}