const express = require('express');
const app=express();
const vowelDictionary=require('./util/dict');
const consonantDictionary=require('./util/dict2');
app.get('/vowel/:id',(req,res)=>{
    const id=req.params.id;
    if(vowelDictionary[id]){
        // res.send(`<img src=${vowelDictionary[id]} alt="Vowel Image">`);
        res.send(vowelDictionary[id]);
    }
    else{
        res.send('Invalid ID');
    }
});
app.get('/consonant/:id',(req,res)=>{
    const id=req.params.id;
    if(consonantDictionary[id]){
        // res.send(`<img src=${consonantDictionary[id]} alt="Vowel Image">`);
        res.send(consonantDictionary[id]);
    }
    else{
        res.send('Invalid ID');
    }
});
app.listen(3000,()=>{console.log('Server is running')});