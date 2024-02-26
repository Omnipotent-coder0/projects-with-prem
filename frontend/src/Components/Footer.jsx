import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='w-screen h-max p-10  bg-slate-900 border-2  border-gray-950 flex flex-row justify-around  '>
        <div className=' text-gray-50 flex flex-col'> 
            <h1 className='text-4xl mb-5 font-bold'>Newzy</h1>
            <p className='w-2/3'>All in One Web-App for all your need of category to Search  and Read New's for Free</p>
        </div>
        <div className=' space-x-6 text-white flex flex-row'>
            <div className='  flex flex-col'>
                <p className='font-bold mb-2'>WORLD</p>
                <p>Politics</p>
                <p>Health</p>
                <p>Business</p>
                <p>Health</p>
            </div>
            <div className=' flex flex-col'>
                <p className='font-bold mb-2'>TECH</p>
                <p>StartUp</p>
                <p>Gen AI</p>
                <p>Crypto</p>
                <p>Software</p>
            
            </div>
            <div className='  flex flex-col'>
                <p className='font-bold mb-2' >LIFE</p>
                <p>Food</p>
                <p>Style</p>
                <p>Movies</p>
                <p>Music</p>
                
                </div>
            <div className=' flex flex-col'>
                <p className='font-bold mb-2' >OTHER</p>
                <p>About Us</p>
                <p>Contact Us</p>
                <p>T & C</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer