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
}