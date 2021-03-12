const express= require('express')
const {userQueries}= require('../controllers/user.controllers')
const {messageQueries}= require('../controllers/message.controllers')
const {ServeurQuery}= require("../controllers/serveur.controller")
const router =new express.Router()

router.route('/')
.get((req,res)=>{
    if (req.session.chat) {
        res.redirect('/chat')
    }
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
        let  message=await messageQueries.getAllMassage()
        let Serveur= await ServeurQuery.getAllServeur()
        res.render('chat',{
            users:users,
            user :req.session.chat,
            messages:message,
            serveurs:Serveur.serveur
        })
    }else{
        res.redirect('/')
    }
   
})
module.exports= router