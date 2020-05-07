const express= require('express')
const {userQueries}= require('../controllers/user.controllers')
const {messageQueries}= require('../controllers/message.controllers')
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
    if(req.session.chat){
        console.log("ma session existe")
        let  message=await messageQueries.getAllMassage()
        console.log("TOUS LES MESSAGE",message)
        res.render('chat',{
            users:users,
            user :req.session.chat,
            messages:message
        })
    }else{
        res.redirect('/')
    }
   
})
module.exports= router