const bcrypt= require('bcrypt-nodejs')
const User=require('../models/index').User
exports.userQueries= class{
    static setUser(data){
        return new Promise(async(next)=>{
           const user= new User({
            nom:data.nom,
            pseudo:data.pseudo,
            password:bcrypt.hashSync(data.password,bcrypt.genSaltSync(10),null),
            email:data.email,
            number:data.number
           }).save().then((user)=>{
               console.log(user)
            next(user)
           }).catch((err)=>{
            next({etat:err})
           })
        })
    }
    static getUsers(datas){
        return new Promise(async(next)=>{
          User.findOne({
                email:datas.email,
            }).then(async(user)=>{

                console.log('salut 1',user)
               const compare= await bcrypt.compareSync(datas.password,user.password)
               if(compare){
                console.log('salut res',compare)
                user.status='Online'
                user.save()
                next(user)
               }else{
                   next({etat:"echec d'autantification"})
               }
            }).catch((err)=>{
                next({
                    etat:err
                })
            })
        })
    }
    static getOneUserId(data){
        return new Promise(async(next)=>{
            User.findById(data.id).then((user)=>{
                user.status= data.status
                user.save()
                next({ user})
            }).catch((err)=>{
                next(err)
            })
        })
    }
    static getallUsers(){
        return new Promise(async(next)=>{
            User.find({}).then((users)=>{
                next(
                    users
                )
            })
        })
    }
    static getUpdateStatus(){
        return new Promise(async(next)=>{
            
        })
    }
}

// loopback 
// Voici votre ID client    909676031206-n998o744ndibhfmba3opq2m5u42oepjq.apps.googleusercontent.com
// Voici votre code secret client   ghQfcCO4MvOlJ8ClWItMCPYV


// code d'autorisation      4/tAGcRSuErXHT0jx5OMIk3JRrl1zv-_74Q61L_xaHMK03AVVAjckajcgVO2pJ1bGCpz4TnzbtPkYHiIMCVSZ7rTo

