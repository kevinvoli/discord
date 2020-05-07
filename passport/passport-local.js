// const passport = require('passport')
// const User= require('../models/index').User
// const LocalStrategy= require('passport-local')

// passport.serializeUser((user,done=>{
//     done(null, user.id)
// }))

// passport.deserializeUser((id,done)=>{
//     User.findByid(id, (err,user)=>{
//         done(err,user);
//     })
// })

// passport.use('local.register',new LocalStrategy({
//     usernameField:'email',
//     passwordField:'password',
//     passResToCallBack:true
// },(req,email,password,done)=>{
//     User.findOne({'email':email},(err,user)=>{

//     })
// }))