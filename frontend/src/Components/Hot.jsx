import React, { useEffect, useState } from 'react'
import { getData } from '../main';
import Cardsm from './Cards/Cardsm';
import NoImage from "../assets/noimage.png"
import { Link } from 'react-router-dom';
// import Hotimage from '../assets/img_rectangle5.png'
const MainItem = (props)=>(
    <div className="m-10">
        <Link className='flex my-20 w-full justify-center gap-8 cursor-pointer' to = "/trending/0">
        { props.item.urlToImage ? <img className='h-60 hover:shadow-2xl duration-200' src={props.item.urlToImage} alt="hot topic image" /> :
            <img className='h-60' src={NoImage} alt="hot topic image" />}
            <div className='flex-col space-y-4'>
                <h4 className='font-bold'>Hot topics</h4>
                <h1 className='text-2xl h-16 overflow-hidden font-bold'>{props.item.title}</h1>
                <h1 className='text-xl font-semibold mb-10'>{props.item.publishedAt}</h1>
                <h4 className=''>Read more...</h4>
            </div>
        </Link> 
    </div>
)
const Hot = (props) => {
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
            const {data} = await getData(props.route);
            setItems(data);
        }
        getResults();
    },[])

  return (
    <div>
        <MainItem item = {items[0] }/> 
        <div className='flex justify-center gap-10 flex-wrap p-4'>
            {items.map((item, index)=>(
                index == 0 ? null : <Cardsm item = {item} route = {'/' + props.route + '/' + index} index = {index} key = {index} />
            ))}
        </div>
    </div>
  )
}

export default Hot