const express = require('express');
const app = express();
const knex =require('./knex')
const PORT = 8000;

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


// adding route 
app.post('/api/add',async(req,res)=>{
   
    try{

    let added = await knex('infos').insert(req.body);
    res.json(added)

}    catch{
   
    res.json({"err":"Error occured"})
}

})

// getting route 
app.get("/api/get",async(req,res)=>{
    try{
        let info = await knex("infos").select("*");
        res.json(info)
    }
    catch{

        res.status(404).json({"err":"Not Found"})
    }
    
})


app.listen(PORT,()=>{
    console.log("running boy");
})