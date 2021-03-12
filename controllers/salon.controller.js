const Serveur=require("../models/index").Serveur
const Salon=require("../models/index").Salon


exports.SalonQuery= class{
    static setSalon(data){
        return new Promise(async(next)=>{
            console.log("listeSalon",data)
           
            new Salon({
                nom:data.nom,
                users:data.user,
                server:data.id,
            }).save().then((salon)=>{
                Serveur.updateOne({
                    "_id":data.id
                },{
                    $push:{
                        "salon": salon._id
                    }
                }
                ).then((sss)=>{
                    console.log("listeSalon",sss)
                })
                next({salon:salon})
            }).catch((err)=>{
                next({error:err})
            })
        })
    }
    static getAllSalon(){
        return new Promise(async(next)=>{
            Salon.find().pretty().then((salon)=>{
                next({salon:salon})
            }).catch(err=>{
                next({error:error})
            })
        })
    }
    static getSalonMessage(data){
        return new Promise(async(next)=>{
            Salon.findById(data,{messages:1,_id: 0}).populate({
                path:'messages',
                populate:{
                    path:'Users',
                    models:"User"
                }
            }).sort({name:-1}).limit(1).then((salon)=>{
                next({salon:salon})
            }).catch((err)=>{
                next({error:err})
            })
        })
    }
    static getOneSalon(data){
        return new Promise(async(next)=>{
            Salon.findById(data.idAdd).populate({path:'users'}).populate('messages').then((salon)=>{
                salon.status="active"
                salon.save()
                if(data.idRem){
                    Salon.findById(data.idRem).then((sal)=>{
                        sal.status=' '
                        sal.save()
                    })
                }
                console.log("Mes salon sont la///==",salon)
                next({salon:salon})
            }).catch((err)=>{
                next({error:err})
            })
        })
    }
   
}