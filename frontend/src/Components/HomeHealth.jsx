import React from 'react'
import Cardl from './Cards/Cardl'
import Cardm from './Cards/Cardm'

const HomeHealth = () => {
  return (
    <div className='m-20 mt-40'>
        <h1 className='text-5xl font-bold mb-6 '>Health</h1>
        <div className='flex'>
            <Cardl/>
            <div>
                <Cardm/>
                <Cardm/>
            </div>
        </div>
        
    </div>
  )
}

export default HomeHealth