import React, { useEffect, useState } from 'react'
import NoImage from '../../assets/noimage.png'
const Cardm = (props) => {
  return (
    <div className='max-w-80 bg-slate-100 hover:cursor-pointer hover:shadow-lg duration-200'>
      <img className="rounded-t-md  aspect-video" src={ props.item.urlToImage ? props.item.urlToImage : NoImage} alt="" />
      <h2 className='font-bold text-slate-900 text-xl h-14 overflow-hidden'>{props.item.title}</h2>
      <h4 className='leading-6 h-12 overflow-hidden'>{props.item.description}</h4>
      <h4 className='font-bold text-slate-600 text-sm'>{props.item.publishedAt}</h4>
    </div>
  )
}

export default Cardm