const express= require('express')
const router =new express.Router()

router.route('/')
.get((req,res)=>{
    res.render('index')
})


router.route('/register')
.get((req,res)=>{
    res.render('register')
})



router.route('/chat')
.get((req,res)=>{
    res.render('chat')
})



module.exports= router