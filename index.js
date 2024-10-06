import fs from 'fs';

import express from "express"
const app=express()
const port=4000

app.get('/',(req,res) =>{
    res.send('Hello world')
})

app.get('/twitter',(req,res)=>{
    res.send('Mushi@yamal.com')
})

app.get('/login',(req,res)=>{
    res.send('<h1>Please login to your facebook account</h1>')
})

app.listen(process.env.PORT,()=>{
    console.log(`Example app listening on port ${port}`);
    
})
