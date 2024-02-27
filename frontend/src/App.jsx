// import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.scss'
import Header from './Components/Header';
import Home from './Components/Home';
import Health from './Screens/Health';
import Footer from './Components/Footer'
import Technology from './Screens/Technology';
import Business from './Screens/Business';
import Entertainment from './Screens/Entertainment';
import Subscribe from './Components/Subscribe';
import Trending from './Screens/Trending';
import Item from './Screens/Item';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element = {<Home/>} />
          <Route path='/trending' element = {<Trending/>} />
          <Route path='/trending/:id' element = {<Item/>} />
          <Route path='/health' element = {<Health/>} />
          <Route path='/health/:id' element = {<Item/>} />
          <Route path='/technology' element = {<Technology/>} />
          <Route path='/technology/:id' element = {<Item/>} />
          <Route path='/business' element = {<Business/>} />
          <Route path='/business/:id' element = {<Item/>} />
          <Route path='/entertainment' element = {<Entertainment/>} />
          <Route path='/entertainment/:id' element = {<Item/>} />
        </Routes>
        <Subscribe />
        <Footer/>
      </Router>
    </>
  )
}

export default App
