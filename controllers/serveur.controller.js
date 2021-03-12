const Serveur=require("../models/index").Serveur
const Salon=require("../models/index").Salon


exports.ServeurQuery= class{
    static setServeur(data){
        return new Promise(async(next)=>{
            const Server= new Serveur({
                nom:data.nom,
                admin:data.user
            })
            new Salon({
                Server:Server._id,
                users:data.user
            }).save().then((salon)=>{
                Server.salon=salon._id
                Server.save().then((serve)=>{
                    next({Salon:salon,serveur:serve})
                })
            }).catch((err)=>{
                next({error:err})
            })
        })
    }
    static getAllServeur(){
        return new Promise(async(next)=>{
            Serveur.find({}).then((serveur)=>{
                next({serveur:serveur})
            })
        })
    }
    static getOneServeur(data){
        return new Promise(async(next)=>{
            Serveur.findById(data.idAdd).populate({
                path:'salon',
                populate:{
                    path:'users',
                    model:'User'
                }
            }).then((serveur)=>{
                console.log("le serveur:",serveur)
                serveur.status=data.statusAdd
                serveur.save()
                if(data.idRem){
                    Serveur.findById(data.idRem).then((ser)=>{
                        ser.status=data.statusRem
                        ser.save()
                    })
                }
                next({serveur:serveur})
            }).catch((err)=>{
                next({error:err})
            })
        })
    }
}