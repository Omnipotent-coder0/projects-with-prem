import React, { useEffect, useState } from 'react'
import { getData } from '../main';
import NoImage from "../assets/noimage.png"
import Cardsm from '../Components/Cards/Cardsm';
import { Link, useLocation } from 'react-router-dom';


const MainItem = (props)=>(
    <div className='flex my-20 w-full justify-center' >
        <div className='flex gap-8 max-w-5xl' >
            <img className='h-60' src={ props.item.urlToImage ? props.item.urlToImage : NoImage} alt="hot topic image" />
            <div className='flex-col'>
                <h1 className='text-xl h-16 overflow-hidden font-bold'>{props.item.title}</h1>
                <h2>{props.item.description} {props.item.content}</h2>
                <h1 className='text-xl font-semibold mb-10'>{props.item.publishedAt}</h1>
            </div>
        </div>
    </div> 
)

const Item = () => {
    const {pathname} = useLocation();
    const array = pathname.split('/');
    const route = array[1];
    const id = Number(array[2]);
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
            const {data} = await getData(route);
            setItems(data);
        }
        getResults();
    },[])

  return (
    <div>
        {
            items.length > id ? <MainItem item = {items[id] }/> :
            <MainItem item = {items[0]}/> 
        }
        <div className='flex justify-center gap-10 flex-wrap p-4'>
            {items.map((item, index)=>(
                index != id && <Cardsm item = {item} route = {'/' + route + '/' + index} key = {index} />
                // <div>{'/' + route + '/' + index}</div>
            ))}
        </div>
    </div>
  )
}

export default Item