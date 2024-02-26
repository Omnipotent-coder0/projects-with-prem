import React from 'react'
import Hot from './Hot'
import HomeHealth from './HomeHealth'
import HomeTechnology from './HomeTechnology'
import HomeBusiness from './HomeBusiness'
import HomeEntertainment from './HomeEntertainment'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
        <Hot/>
        <HomeHealth/>
        <HomeTechnology/>
        <HomeBusiness/>
        <HomeEntertainment/>
        <Footer/>
    </div>
  )
}

export default Home