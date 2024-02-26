// import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import Header from './Components/Header';
import Home from './Components/Home';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element = {<Home/>} />
        </Routes>
        <div className='text-3xl underline font-bold text-center' >
          hello this is sample text
        </div>
      </Router>
    </>
  )
}

export default App
