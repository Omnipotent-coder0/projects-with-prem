// import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.scss'
import Header from './Components/Header';
import Home from './Screens/Home';
import Health from './Screens/Health';
import Footer from './Components/Footer'
import Technology from './Screens/Technology';
import Business from './Screens/Business';
import Entertainment from './Screens/Entertainment';
import Subscribe from './Components/Subscribe';
import Trending from './Screens/Trending';
import Item from './Screens/Item';
import NavItem from './Screens/NavItem';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element = {<Home/>} />
          <Route path='/trending' element = {<Trending/>} />
          <Route path='/health' element = {<NavItem route = {'health'}/>} />
          <Route path='/technology' element = {<NavItem route = {'technology'}/>} />
          <Route path='/entertainment' element = {<NavItem route = {'entertainment'}/>} />
          <Route path='/business' element = {<NavItem route = {'business'}/>} />
          <Route path='/trending/:id' element = {<Item/>} />
          <Route path='/health/:id' element = {<Item/>} />
          <Route path='/technology/:id' element = {<Item/>} />
          <Route path='/business/:id' element = {<Item/>} />
          <Route path='/entertainment/:id' element = {<Item/>} />
        </Routes>
        <Subscribe />
        <Footer/>
      </Router>
    </>
  )
}

export default App
