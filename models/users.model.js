const express= require('express')
const mongoose = require('mongoose')
const Schema= mongoose.Schema

const UserShema= new Schema({
    nom:  {type:String,require:true},
    pseudo: {type:String,require:true},
    password: {type:String,require:true},
    email:  {type:String,require:true, unique:true},
    number:  {type:String,require:true},
    status: {type:String,default:'Offline'}
})

const User= mongoose.model('user',UserShema)
module.exports= User