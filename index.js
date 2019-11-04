const express= require('express')
const session= require('express-session')
const mongoose = require('mongoose')
const ejs = require('ejs')
const app= express()
const route=require('./routes')
const {userQueries}= require('./controllers/user.controllers')




const http= require('http').createServer(app)
app.use('/public', express.static('./public') )
app.set('views','./views')
app.set('view engine', 'ejs' )

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(session({
    secret:"dcdvnhjdfjghnkbfkfd09685554311nbfrk1É122FDVJHN&É(-È_Ç",
    resave:false,
    saveUninitialized:false
}))

app.use(route)

const db= require('./setting/dabase')
db()

const io= require('socket.io').listen(http.listen(3000,()=>{
    console.log('salut bro')
}))

const register= io.of('/register')
register.on('connection',(socket)=>{
    console.log('tu est connecte')
    socket.on('inscription', async(data)=>{
        const result= await userQueries.setUser(data)
        socket.emit('inscription',result)
    })
})

const inscription = io.of('/')

inscription.on('connection',(socket)=>{
    console.log('connecte toi')
    socket.on('connecte',async(data)=>{
        console.log(data)
        const result= await userQueries.getUsers(data)
        if (result.etat===null){
            let erreur= 'error'
            socket.emit('connecte',erreur)
        }else{
            console.log(result)
            socket.emit('connecte',result) 
        }
       
    })
})