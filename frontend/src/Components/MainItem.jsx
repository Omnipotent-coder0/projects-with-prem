import React from 'react'

import NoImage from '../assets/noimage.png';

const MainItem = (props)=>(
    <div className='flex my-20 w-full justify-center' >
        <div className='flex flex-col gap-8 w-3/5'>
            <h1 className='text-3xl w-3/4 overflow-hidden font-bold'>{props.item.title}</h1>
            <div className='flex gap-8' >
                <img className='w-full aspect-video rounded-xl' src={ props.item.urlToImage ? props.item.urlToImage : NoImage} alt="hot topic image" />
            </div>
            <div className='flex-col'>
                <h2 className='font-medium text-xl' >{props.item.description} {props.item.content}</h2>
                {/* <h1 className='text-xl font-semibold '>{props.item.publishedAt}</h1> */}
            </div>
        </div>
    </div> 
)

export default MainItem