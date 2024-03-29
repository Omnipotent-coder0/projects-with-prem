import React, { useEffect, useState } from 'react'
import Cardm from '../Components/Cards/Cardm';
import { getData } from '../main';


const Health = () => {
    const [items, setItems] = useState([{
        "source": {
            "id": null,
            "name": "Livemint"
        },
        "author": "Devesh Kumar",
        "title": "Mumbai Indians vs Delhi Capitals, WPL 2024 Live Score Updates: Meg Lanning, Shafali Verma on crease, DC score 0/0 | Mint - Mint",
        "description": "Mumbai Indians vs Delhi Capitals, WPL 2024 Live Score Updates: Mumbai Indians pacer Shabnim Ismail provided her team with the first breakthrough as she dismissed Shafali Verma. Alice Capsey has joined Meg Lanning on crease. Catch LIVE updates here",
        "url": "https://www.livemint.com/sports/cricket-news/wpl-opening-ceremony-live-2024-srk-jiocinema-mum-w-vs-del-w-wpl-2024-live-score-women-ipl-mumbai-indians-delhi-capitals-11708682055492.html",
        "urlToImage": "https://media1.tenor.com/m/In8c2digq1MAAAAC/claudio-claudin.gif",
        "publishedAt": "2024-02-23T14:32:24Z",
        "content": "Mumbai Indians vs Delhi Capitals, WPL 2024 Live Score Updates: MI skipper Harmanpreet Kaur won the toss and chose to bowl first. DC openers Meg Lanning and Shafali Verma began on a cautious note as S… [+17577 chars]"
    }]);
    useEffect(()=>{
        async function getResults(){
            const {data} = await getData('health');
            console.log(data);
            console.log(data[1]);
            setItems(data);
        }
        getResults();
    },[])
  return (
    <div className='flex justify-center gap-10 flex-wrap p-4 m-10'>
            {items.map((item, index)=>(
                <Cardm item = {item} key = {index} />
            ))}
    </div>
  )
}

export default Health