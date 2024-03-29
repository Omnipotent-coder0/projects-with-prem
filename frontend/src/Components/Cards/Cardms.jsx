import React from 'react'
import NoImage from "../../assets/noimage.png"

const Cardms = (props) => {
    return (
        <div className='max-w-96 rounded-xl border-2 overflow-hidden border-slate-200 bg-slate-100 hover:cursor-pointer hover:shadow-lg duration-200'>
          <img className="  aspect-video" src={ props.item.urlToImage ? props.item.urlToImage : NoImage} alt="" />
          <div className='m-4' >
            <h2 className='font-bold text-slate-900 text-xl h-14 overflow-hidden'>{props.item.title}</h2>
            <h4 className='leading-6 h-12 overflow-hidden'>{props.item.description}</h4>
            <h4 className='font-bold text-slate-600 text-sm'>{props.item.publishedAt}</h4>
          </div>
        </div>
      )
}

export default Cardms