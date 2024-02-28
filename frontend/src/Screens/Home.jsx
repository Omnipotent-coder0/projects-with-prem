import React from 'react'
import Hot from '../Components/Hot'
import Row from '../Components/Row'
import greenWave from '../assets/greenWave.svg'
import blueWave from '../assets/blueWave.svg'
import greyWave from '../assets/greyWave.svg'
import purpleWave from '../assets/purpleWave.svg'
import purpleWaveEnd from '../assets/purpleWaveEnd.svg'
const Home = () => {
  return (
    <div>
        <Hot route = {'trending'}/>
        <img className='w-full' src={greenWave} alt="" />
        <div className="bg-lime-600 ">
          <Row route = {'health'}/>
        </div>
        <img className='w-full' src={blueWave} alt="" />
        <div className="bg-cyan-700">
          <Row route = {'technology'}/>
        </div>
        <img className='w-full' src={greyWave} alt="" />
        <div className="bg-gray-500">
          <Row route = {'business'}/>
        </div>
        <img className='w-full' src={purpleWave} alt="" />
        <div className="bg-purple-500">
          <Row route = {'entertainment'}/>
        </div>
        <img className='w-full' src={purpleWaveEnd} alt="" />
    </div>
  )
}

export default Home