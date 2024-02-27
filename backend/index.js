import express from "express"
import cors from 'cors'
import 'dotenv/config'
import axios from "axios";
import {trending, health, business, technology, entertainment} from './sampleData.js'

const port = process.env.PORT;
const api = process.env.API_KEY;
const url = process.env.API_URL;

const getData = async (category = null)=>{
    if(category){
        const {data} = await axios.get(`${url}country=in&category=${category}&apiKey=${api}`)
        return data;
    }
    else{
        const {data} = await axios.get(`${url}country=in&apiKey=${api}`)
        return data;
    }
}

const app = express();
app.use(express.json());
app.use(cors({
    origin : "*"
}))

app.get('/',(req,res)=>{
    console.log("This is Home page")
    try {
        return res.status(200).send("Hello this is Home page");
    } catch (error) {
        console.log(error);
        return res.status(500).send({message : error.message});
    }
})

app.get('/trending',async (req, res)=>{
    try {
        // const {articles} = await getData();
        // return res.status(200).send(articles);
        return res.status(200).send(trending);
    } catch (error) {
        console.log(error);
        return res.status(500).send({message : error.message});
    }
})
app.get('/health',async (req, res)=>{
    try {
        // const {articles} = await getData('health');
        // return res.status(200).send(articles);
        return res.status(200).send(health);
    } catch (error) {
        console.log(error);
        return res.status(500).send({message : error.message});
    }
})
app.get('/business',async (req, res)=>{
    try {
        // const {articles} = await getData('business');
        // return res.status(200).send(articles);
        return res.status(200).send(business);
    } catch (error) {
        console.log(error);
        return res.status(500).send({message : error.message});
    }
})
app.get('/entertainment',async (req, res)=>{
    try {
        // const {articles} = await getData('entertainment');
        // return res.status(200).send(articles);
        return res.status(200).send(entertainment);
    } catch (error) {
        console.log(error);
        return res.status(500).send({message : error.message});
    }
})
app.get('/technology',async (req, res)=>{
    try {
        // const {articles} = await getData('technology');
        // return res.status(200).send(articles);
        return res.status(200).send(technology);
    } catch (error) {
        console.log(error);
        return res.status(500).send({message : error.message});
    }
})


app.listen(port,()=>(
    console.log(`Your server is running on port : ${port}`)
))