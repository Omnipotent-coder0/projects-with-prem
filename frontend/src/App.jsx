// import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import Header from './Components/Header';
import Home from './Components/Home';
import Health from './Screens/Health';
import Footer from './Components/Footer'
import Technology from './Screens/Technology';
import Business from './Screens/Business';
import Entertainment from './Screens/Entertainment';
import Subscribe from './Components/Subscribe';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element = {<Home/>} />
          <Route path='/health' element = {<Health/>} />
          <Route path='/technology' element = {<Technology/>} />
          <Route path='/business' element = {<Business/>} />
          <Route path='/entertainment' element = {<Entertainment/>} />
        </Routes>
        <Subscribe />
        <Footer/>
      </Router>
    </>
  )
}

export default App
