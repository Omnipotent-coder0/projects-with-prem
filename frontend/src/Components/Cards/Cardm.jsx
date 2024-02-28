import React, { useEffect, useState } from 'react'
import NoImage from '../../assets/noimage.png'
import { Link } from 'react-router-dom'
const Cardm = (props) => {
  return (
    <Link to = { '/' + props.route + "/" + props.index} className='min-w-80 max-w-80 rounded-xl border-2 border-slate-200 bg-slate-100 hover:cursor-pointer hover:shadow-lg duration-200'>
      <img className="w-full object-cover object-top rounded-t-xl aspect-video" src={ props.item.urlToImage ? props.item.urlToImage : NoImage} alt="" />
      <div className='m-4' >
        <h2 className='font-bold text-slate-900 text-xl h-14 overflow-hidden'>{props.item.title}</h2>
        <h4 className='leading-6 h-12 overflow-hidden'>{props.item.description}</h4>
        <h4 className='font-bold text-slate-600 text-sm'>{props.item.publishedAt}</h4>
      </div>
    </Link>
  )
}

export default Cardm