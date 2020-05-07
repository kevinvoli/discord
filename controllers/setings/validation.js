module.exports = function(){
    return {
        inscriptionValidation:(req, res, next)=>{
        req.checkBody('nom','name is requere').notEmpty()
        req.checkBody('password','name is requere').isLength({min:4});
        req.checkBody('pseudo','name is requere').notEmpty()
        req.checkBody('email','name is requere').isEmail()
        req.checkBody('number','name is requere').notEmpty()


        req.getValidationResult()
            .then((result)=>{
                const errors= result.array()
                const messages= [];
                errors.forEach(error => {
                    messages/push(error.msg)
                });
                req.flesh('error',messages)
            }).catch((err)=>{
                return next() 
            })
    }
}
}



 





