const mongoose= require('mongoose')

const connection =async ()=>{
    try {
    await mongoose.connect('mongodb://localhost:27017/discord',{
        useNewUrlParser:true,
        useFindAndModify:false,
        useUnifiedTopology:true
    })
    console.log('cool bro')
    }
    catch(err){       
console.log(err)
    }
}
module.exports= connection