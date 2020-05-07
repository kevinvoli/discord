
exports.SchemaUsers= new mongoose.Schema({
  nom: String,
  pseudo: {type:String,require:true},
  password: {type:String,require:true},
  email:  {type:String,require:true, unique:true},
  number:  {type:String,require:true},
  image:{type: String, default:'/public/img/avatar.png'},
  date:{type:Date, default:Date.now},
  reponse:[{ type:mongoose.Schema.ObjectId, ref:'reponse-ref' } ],
  message:[{ type:mongoose.Schema.ObjectId, ref:'message-ref' }],
  status:{type: String, default:'Offline' },
  facebook:{type:String, default:''},
  googleTokens:Array

})




exports.modelsMessage= new mongoose.Schema({
    message:{type: String, default:''},
    Date: {type:Date, default:Date.now},
    reponse:[{ type:mongoose.Schema.ObjectId, ref:'reponse-ref' }],
    Users: { type:mongoose.Schema.ObjectId, ref:"User-ref", childPath:"message" }
})
exports.ModelReponse= new mongoose.Schema({
  reponse:{type: String, default:''},
  Date: {type:Date, default:Date.now},
  Users: { type:mongoose.Schema.ObjectId, ref:"User-ref", childPath:"reponse" },
  Messages: { type:mongoose.Schema.ObjectId, ref:"message-ref", childPath:"reponse" }

})