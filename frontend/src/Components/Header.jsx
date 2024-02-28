import React, { useEffect } from 'react';
import { FaSearch } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const {pathname} = useLocation();
  useEffect(()=>{
    console.log(pathname);
  },[])
  return (
    <nav className='bg-slate-900 h-24 text-white flex items-center justify-between ps-4 pe-4'>
        <div className='text-5xl m-4' >
            <Link to = {'/'} className = {pathname == "/" ? 'text-yellow-400' : ''} >Newzy</Link>
        </div>
        <div className='flex space-x-8' >
            <Link to = {'/health'} className = {pathname.includes('/health') ? 'text-yellow-400' : ''} >Health</Link>
            <Link to = {'/technology'} className = {pathname.includes('/technology') ? 'text-yellow-400' : ''} >Technology</Link>
            <Link to = {'/business'} className = {pathname.includes('/business') ? 'text-yellow-400' : ''}>Business</Link>
            <Link to = {'/entertainment'} className = {pathname.includes('/entertainment') ? 'text-yellow-400' : ''}>Entertainment</Link>
        </div>
        <div className='flex space-x-3 items-center justify-center text-xl' >
            <FaSearch />
            <span>|</span>
            <Link to = {'/login'} className = {pathname.includes('/login') ? 'text-yellow-400' : ''}>Login</Link>
            <Link to = {'/register'} className = {pathname.includes('/register') ? 'text-yellow-400' : ''}>Register</Link>
            
        </div>
    </nav>
  )
}

export default Header