const Message= require('../models/index').Message
const User=require('../models/index').User
new Message({})
exports.messageQueries= class{
    static setMesage(data){
        console.log(data)
        return new Promise(async(next)=>{
            const message = new Message({
                message:data.message,
                Users:data.id 
            }).save().then((message)=>{
                User.update({_id:data.id},{$push:{messag:message._id}})
                console.log("LES MESSAGES USERRRRR",message)
                    next(message)

            }).catch((err)=>{
                console.log("USERRRRR",message)
                next(err)
         })       
        })
    }
    static getAllMassage(){
        return new Promise(async(next)=>{
            Message.find({}).populate('Users').then((message)=>{
                next(message)
            })
        })
    }
}

