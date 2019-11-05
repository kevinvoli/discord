const User=require('../models/users.model')
exports.userQueries= class{
    static setUser(data){
        return new Promise(async(next)=>{
           const user= new User({
            nom:data.nom,
            pseudo:data.pseudo,
            password:data.password,
            email:data.email,
            number:data.number
           }).save().then((user)=>{
            next({
                etat:user
            })
           }).catch((err)=>{
            next({etat:err})
           })
        })
    }
    static getUsers(datas){
        return new Promise(async(next)=>{
          User.findOne({
                password: datas.password,
                email:datas.email,
                
            }).then((user)=>{
                user.status='Online'
                user.save()
                next({
                    etat : user
                })
            }).catch((err)=>{
                next({
                    etat:err
                })
            })
        })
       
    }
    static getOneUserId(data){
        return new Promise(async(next)=>{
            User.findById(data).then((user)=>{
                user.status= 'Offline'
                user.save()
                next({ user})
            }).catch((err)=>{
                next(err)
            })
        })
    }
    static getallUsers(data){
        return new Promise(async(next)=>{
            User.find({}).then((users)=>{
                next(
                    users
                )
            })
        })
    }
}

