import React, { useEffect, useState } from 'react'
import NoImage from '../../assets/noimage.png'
const Cardm = (props) => {
  const [data, setData] = useState(props.item);
  return (
    <div className='max-w-80 bg-slate-100 hover:cursor-pointer hover:shadow-lg duration-200'>
      {data.urlToImage ? <img className="rounded-t-md" src={data.urlToImage} alt="" /> : <img className="rounded-t-md" src={NoImage} alt="" />}
      <h2 className='font-bold text-slate-900 text-xl h-14 overflow-hidden'>{data.title}</h2>
      <h4 className='leading-6 h-12 overflow-hidden'>{data.description}</h4>
      <h4 className='font-bold text-slate-600 text-sm'>{data.publishedAt}</h4>
    </div>
  )
}

export default Cardm