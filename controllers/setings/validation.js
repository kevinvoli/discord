const { check, validationResult } = require('express-validator');


module.exports= function validation(data){
    console.log(data)

        return new Promise(async(next)=>{
        (()=>{
            check('data.email').isEmail()
            check('data.number').isEmpty().isMobilePhone()
            check('password').isLength({ min: 5 })  
        }).then((result)=>{
            console.log(result)
            next(result)
        }).catch((errors)=>{
            console.log(errors)
            next(errors)
        })

    })
   
}