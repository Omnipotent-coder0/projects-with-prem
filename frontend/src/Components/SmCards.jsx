import React, { useState } from 'react'
import Cardsm from './Cards/Cardsm';

const SmCards = () => {
    const [data, setData] = useState([{"img":"../assets/img_rectangle5.png", "title" : "Miami Dolphins won the match and officially qualified for the final", "date" : "New York, 22 Agust 2022",}]);
  return (
    <div>
        {data.map((item, index)=>(
            <Cardsm data = {item} key = {index}/>
        ))}
    </div>
  )
}

export default SmCards