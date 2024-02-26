import React from 'react';
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='bg-slate-900 h-24 text-white flex items-center justify-between ps-4 pe-4'>
        <div className='text-5xl m-4' >
            <Link to = {'/'}>Newzy</Link>
        </div>
        <div className='flex space-x-8' >
            <Link to = {'/health'}>Health</Link>
            <Link to = {'/technology'}>Technology</Link>
            <Link to = {'/business'}>Business</Link>
            <Link to = {'/entertainment'}>Entertainment</Link>
        </div>
        <div className='flex space-x-3 items-center justify-center text-xl' >
            <FaSearch />
            <span>|</span>
            <Link to = {'/login'}>Login</Link>
            <Link to = {'/register'}>Register</Link>
            
        </div>
    </nav>
  )
}

export default Header