const Message= require('../models/index').Message
const User=require('../models/index').User
const Salon= require("../models/index").Salon
const {SalonQuery}= require('../controllers/salon.controller')
new Message({})
exports.messageQueries= class{
    static setMesage(data){
        return new Promise(async(next)=>{
            await new Message({
                message:data.message,
                Users:data.id,
                serveur:data.serveur,
                salon:data.salon
            }).save().populate('Users').execPopulate().then(async(message)=>{
                
                User.updateOne(
                    {"_id":data.id},{$push:{"message":message._id}
                })
                Salon.updateOne(
                    {"_id":data.salon},{$push:{"messages":message._id}}).then((zzz)=>{ 
                })
                
                next(message)
            }).catch((err)=>{
                
                next(err)
         })       
        })
    }
    static getOneMessage(data){
       
        return new Promise(async(next)=>{
            console.log("Mes mesaage:",data) 
            Salon.findOne({"_id":data}).then((salon)=>{
                
                next(salon)
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

