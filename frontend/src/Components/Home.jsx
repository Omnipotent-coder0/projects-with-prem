import React from 'react'
import Hot from './Hot'
import HomeHealth from './HomeHealth'
import HomeTechnology from './HomeTechnology'
import HomeBusiness from './HomeBusiness'
import HomeEntertainment from './HomeEntertainment'

const Home = () => {
  return (
    <div>
        <Hot/>
        <HomeHealth/>
        <HomeTechnology/>
        <HomeBusiness/>
        <HomeEntertainment/>
    </div>
  )
}

export default Home