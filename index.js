const express = require('express');
const app = express();
const  bodyParser = require('body-parser')
const knex =require('./knex')

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
const db = require('./functions')


app.post('/',async(req,res)=>{
   
    let added = await knex('infos').insert(req.body);

    
    console.log(added)
res.json(added)

})

app.get("/get",async(req,res)=>{
    let info = await knex("infos").select("*");
    
    res.json(info)
})

app.listen(8000,()=>{
    console.log("running boy");
})