const mongoose = require('mongoose')

const chatSchema= mongoose.Schema({
    message:[
        {
            video:{ type:String},
            audio:{type:String},
            image:{type:String},
            text:{type:String},
            user_id: {
                type: {
                    type:mongoose.Schema.Types.ObjectId, 
                    ref:'user'
                }
            },
            date:{
                Types:Date,
                default:Date.now
            }
        }],
})

module.exports= mongoose.model('chatShema', chatSchema)