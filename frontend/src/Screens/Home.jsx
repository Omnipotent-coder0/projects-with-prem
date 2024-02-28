import React from 'react'
import Hot from '../Components/Hot'
import Row from '../Components/Row'

const Home = () => {
  return (
    <div>
        <Hot route = {'trending'}/>
        <Row route = {'health'}/>
        <Row route = {'technology'}/>
        <Row route = {'business'}/>
        <Row route = {'entertainment'}/>
    </div>
  )
}

export default Home