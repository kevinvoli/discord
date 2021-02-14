const express= require('express')
const app= express()
const bodyParser= require('body-parser')
const cookieParser= require('cookie-parser')
flash =require('connect-flash')
passport = require('passport') 
let validator=require('express-validator');
relationship = require("mongoose-relationship")
server = require("http").createServer(app)
io= require('socket.io')(server)



session = require("express-session")({
    secret: "adezflhe12hedàçcdij",
    resave: true,
    saveUninitialized: true
}),


mongoose = require('mongoose')
const ejs = require('ejs')

const route=require('./routes')
const {userQueries}= require('./controllers/user.controllers')
const {messageQueries}= require('./controllers/message.controllers')
// require('./passport/passport-local')

const http= require('http').createServer(app)
// app.use(validator())
// app.use(flash)
app.use('/public', express.static('./public') )
app.use(cookieParser())
app.set('views','./views')
app.set('view engine', 'ejs' )
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));


app.use(passport.initialize())
app.use(passport.session())

app.use(session)
app.use(flash())

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(route)

sharedsession = require("express-socket.io-session");


const db= require('./setting/dabase')
db()

 // create reusable transporter object using the default SMTP transport


 const register= io.of('/register')
register.on('connection',(socket)=>{
 
    socket.on('inscription', async(data)=>{
        const result= await userQueries.setUser(data)
        socket.emit('inscription',result)
    })
})
const inscription = io.of('/').use(sharedsession(session));
inscription.on('connection',(socket)=>{  

    socket.on('connecte',async(data)=>{
        console.log(data)
        const result= await userQueries.getUsers(data)
        if (result.etat){
            let erreur= 'error'
            socket.emit('connecte',erreur)
        }else{
            socket.handshake.session.chat= result
            socket.handshake.session.save();
            console.log('ma session socket:',socket.handshake.session)
            socket.emit('connecte',result.etat)
        }
    })
})
const deconection = io.of('/chat').use(sharedsession(session));
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
    socket.on('sendMessage',async(data)=>{
        console.log("LES DATA",data)
        const result= await messageQueries.setMesage(data)
        console.log("LE MESSAGE",result)
        deconection.emit('evoiMssage',result)
    })
    socket.on('statusChange',async(status)=>{
        const data= {
            id: socket.handshake.session.chat._id,
            status:status
        }
        const res= await userQueries.getOneUserId(data)
        const donne = {
            id:res.user._id,
            status: res.user.status
        }

        console.log('status change avec success',res)
        socket.broadcast.emit('refreshStatus',donne)
    })
})
const port= 3000
server.listen(port,()=>{
    console.log('cool le bossss',port)
})