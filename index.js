const express= require('express')
const app= express()
server = require("http").createServer(app)
io= require('socket.io')(server)
session = require("express-session")({
    secret: "my-secret",
    resave: true,
    saveUninitialized: true
}),

sharedsession = require("express-socket.io-session");
const mongoose = require('mongoose')
const ejs = require('ejs')

const route=require('./routes')
const {userQueries}= require('./controllers/user.controllers')


const http= require('http').createServer(app)
app.use('/public', express.static('./public') )
app.set('views','./views')
app.set('view engine', 'ejs' )
app.use(session)
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(route)

const db= require('./setting/dabase')
db()





const register= io.of('/register')
register.on('connection',(socket)=>{
    console.log('tu est connecte')
    socket.on('inscription', async(data)=>{
        const result= await userQueries.setUser(data)
        socket.emit('inscription',result)
    })
})

const inscription = io.of('/').use(sharedsession(session, {

}));

inscription.on('connection',(socket)=>{
    console.log('connecte toi')
    socket.on('connecte',async(data)=>{
        console.log(data)
        const result= await userQueries.getUsers(data)
        if (result.etat===null){
            let erreur= 'error'
            socket.emit('connecte',erreur)
        }else{
            socket.handshake.session.chat= result.etat
            socket.handshake.session.save();
            socket.emit('connecte',result.etat)
        }
    })
    socket.on('deco',(data)=>{

    })
})
const deconection = io.of('/chat').use(sharedsession(session, {}));
deconection.on('connection',(socket)=>{
    deconection.emit('userDeco',socket.handshake.session.chat)
    socket.on('deco',async(data)=>{
        console.log(data)
        if(socket.handshake.session.chat){
            const res= await userQueries.getOneUserId(data)
            delete socket.handshake.session.chat
            socket.handshake.session.save()
        }
        socket.emit('deconecter')
    })

})


server.listen(3000,()=>{
    console.log('cool le bossss')
})