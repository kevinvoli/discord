const express= require('express')
const mongoose = require('mongoose')


const UserShema= new mongoose.Schema({
    nom:  {type:String,require:true},
    pseudo: {type:String,require:true},
    password: {type:String,require:true},
    email:  {type:String,require:true, unique:true},
    number:  {type:String,require:true},
    status: {type:String,default:'offline'}
})

module.exports= mongoose.model('user', UserShema)