import React, { useEffect, useState } from 'react'
import NoImage from '../../assets/noimage.png'
const Cardsm = (props) => {
    // const [image, setImage] = useState(NoImage);
    // useEffect(()=>{
    //     if(props.item.urlToImage){
    //       setImage(props.item.urlToImage)
    //     }
    // },[])
  return (
    <div>
        <div className='flex space-x-4 w-max'>
            <div>
              {props.item.urlToImage ? 
              <img className=' rounded-md object-cover w-28' src = {props.item.urlToImage} alt="" /> : 
              <img className=' rounded-md object-contain w-28' src = {NoImage} alt="" />}
            </div>
            <div>
              <h1 className='text-md w-64 font-semibold'>{props.item.title} </h1>
              <h4 className='font-bold text-slate-600 text-xs'>{props.item.publishedAt}</h4>
            </div>
        </div>
        {/* <div>
            <h1>{props.item.title}</h1>
        </div> */}
    </div>
  )
}

export default Cardsm