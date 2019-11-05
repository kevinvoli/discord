const express= require('express')
const {userQueries}= require('../controllers/user.controllers')
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
.get(async(req,res)=>{
    let users= await userQueries.getallUsers()
    console.log("session dcdDEFVGHH:",req.session.chat)
    if(req.session.chat){

        res.render('chat',{
            users:users,
            user:req.session.chat
        })
    }else{
        res.redirect('/')
    }
   
})



module.exports= router