import React, { useEffect, useState } from 'react'
import NoImage from '../../assets/noimage.png'
import { Link } from 'react-router-dom';
const Cardsm = (props) => {
  return (
    <Link className='flex space-x-4 w-max cursor-pointer' to = {props.route}>
        <div>
          {props.item.urlToImage ? 
          <img className=' rounded-md object-cover w-28  aspect-video' src = {props.item.urlToImage} alt="" /> : 
          <img className=' rounded-md object-contain w-28  aspect-video' src = {NoImage} alt="" />}
        </div>
        <div>
          <h1 className='text-base h-12 overflow-hidden w-64 font-semibold'>{props.item.title} </h1>
          <h4 className='font-bold text-slate-600 text-xs'>{props.item.publishedAt}</h4>
        </div>
    </Link>
  )
}

export default Cardsm