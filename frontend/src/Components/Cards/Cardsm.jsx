import React, { useEffect, useState } from 'react'
import NoImage from '../../assets/noimage.png'
const Cardsm = (props) => {
  useEffect(()=>{
    console.log(props.index);
  },[])
  return (
    <div className='flex space-x-4 w-max'>
        <div>
          {props.item.urlToImage ? 
          <img className=' rounded-md object-cover w-28  aspect-video' src = {props.item.urlToImage} alt="" /> : 
          <img className=' rounded-md object-contain w-28  aspect-video' src = {NoImage} alt="" />}
        </div>
        <div>
          <h1 className='text-base h-12 overflow-hidden w-64 font-semibold'>{props.item.title} </h1>
          <h4 className='font-bold text-slate-600 text-xs'>{props.item.publishedAt}</h4>
        </div>
    </div>
  )
}

export default Cardsm